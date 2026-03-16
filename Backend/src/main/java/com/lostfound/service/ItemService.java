package com.lostfound.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.lostfound.model.Item;
import com.lostfound.repository.ItemRepository;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Item reportLost(Item item) {
        item.setStatus("Lost");
        return itemRepository.save(item);
    }

    public Item reportFound(Item item) {
        item.setStatus("Found");
        return itemRepository.save(item);
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item getItem(Long id) {
        return itemRepository.findById(id).orElse(null);
    }

    public Item claimItem(Long id, Long userId) {

        Item item = itemRepository.findById(id).orElse(null);

        if(item != null) {
            item.setStatus("Claimed");
            item.setClaimedBy(userId);
            return itemRepository.save(item);
        }

        return null;
    }
}