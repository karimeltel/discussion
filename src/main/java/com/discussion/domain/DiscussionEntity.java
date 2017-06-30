package com.discussion.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.InheritanceType;
import org.hibernate.annotations.Type;

@Entity
@Table(name = "discussion")
@Inheritance(strategy = InheritanceType.JOINED)
public class DiscussionEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    private String discussionText;
    
    private int parent;

    
	public DiscussionEntity() {
	}


	public DiscussionEntity(int id, String discussionText, int parent) {
		super();
		this.id = id;
		this.discussionText = discussionText;
		this.parent = parent;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getDiscussionText() {
		return discussionText;
	}


	public void setDiscussionText(String discussionText) {
		this.discussionText = discussionText;
	}


	public int getParent() {
		return parent;
	}


	public void setParent(int parent) {
		this.parent = parent;
	}
    

}
