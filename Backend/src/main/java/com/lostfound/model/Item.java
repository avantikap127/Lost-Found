package com.lostfound.model;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;
    private String itemName;
    private String description;
    private String location;
    private Date eventDate;
    private String status;
    private Long reportedBy;
    private Long claimedBy;

    public Long getItemId() { 
        return itemId; 
    }

    public void setItemId(Long itemId) { 
        this.itemId = itemId; 
    }

    public String getItemName() { 
        return itemName; 
    }

    public void setItemName(String itemName) { 
        this.itemName = itemName; 
    }

    public String getDescription() {
         return description; 
    }

    public void setDescription(String description) { 
        this.description = description; 
    }

    public String getLocation() { 
        return location; 
    }

    public void setLocation(String location) { 
        this.location = location; 
    }

    public Date getEventDate() { 
        return eventDate; 
    }

    public void setEventDate(Date eventDate) { 
        this.eventDate = eventDate; 
    }

    public String getStatus() { 
        return status; 
    }

    public void setStatus(String status) { 
        this.status = status; 
    }

    public Long getReportedBy() { 
        return reportedBy; 
    }

    public void setReportedBy(Long reportedBy) { 
        this.reportedBy = reportedBy; 
    }

    public Long getClaimedBy() { 
        return claimedBy; 
    }

    public void setClaimedBy(Long claimedBy) { 
        this.claimedBy = claimedBy; 
    }
}