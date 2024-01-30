---
title: "Outlook - Inbox Zero Workflow - Jeff Su"
description: "This is the tutorial about Inbox Zero Workflow for Outlook mailbox crated at Jeff Su"
author: Mateusz Witomski | Orion
date: 2023-02-24 14:00
type: literatureNote
tags:
  - productivity
  - inbox-zero-workflow
enableToc: true # do not show a table of contents on this page
openToc: false # whether to by-default open or close the table of contents on each page
---

## Description

The previous note [📬 Gmail - Inbox Zero Workflow - Jeff Su](📬%20Gmail%20-%20Inbox%20Zero%20Workflow%20-%20Jeff%20Su.md) focused on describing the configuration of Gmail inbox. In this note I would like to focus on describing the configuration of Hotmail inbox showed by [Jeff Su](Jeff%20Su). In this scenario we're using **Outlook Online**. 

## Actions

### Basic settings

1. **Turn off** *Focused inbox*,
2. Change the display density to *Cozy*,
3. Change **Arrange message list** to *Group into conversations*,
4. Change **Arrange the reading pane** to *Newest on top*,
5. Set the value in section **Reading pane** as you are comfortable for me it will be *Show on the right*.

![IZW_OutlookBasicSettings](stuff/files/InboxZeroWorkFlow/IZW_OutlookBasicSettings.png)

### Advanced Settings

On the **Settings** tab, click on the **View all Outlook settings**.

1. Next go to **Mail** tab, **Layout** section
	1. For setting *"What do you want to happen when you move or delete the item you are viewing?"* set **Open the previous item**,
	2. For setting *"What do you want us to do when you sign in?"* set **Let me select which message to read first**,
	3. For setting *"Message list format"* set **Sender name first**,
	4. For setting *"Message preview text"* set **Show preview text**,
	5. **Save Settings**.

![IZW_OutlookLayout](stuff/files/InboxZeroWorkFlow/IZW_OutlookLayout.png)

2. Next go to **General** tab , **Categories** section
	1. **Create** _"01 Follow Up"_ category and set color 🔴,
		1. You are responsible for the outcome and only **you can take action** 
			1. (e.g. your boss asks for something you can help with)
	2. **Create** _"02 Waiting"_ category and set color 🟡,
		1. You are responsible for the outcome but you need **SOMEONE ELSE** to take action
			1. (e.g. you are responsible for a presentation but you need input from a colleague)
	3. **Create** _"03 Read Through"_ label and set color 🟢,
		1. Emails you want to consistently refer back to in the future
			1. (e.g. industry reports, announcement for a new reimbursement process)
	4. **Create** _"Newsletter 📧"_ label and set color gray color,
	5. Add all created categories to **Favorites** ⭐.

> [!info]+ Outlook vs Gmail
> 
> 1. **Categories (Outlook)** is the equivalent of **Labels (Gmail)**.
> 2. What Microsoft calls **Rules** is just the filter function - **Filter messages like this** - within Gmail.

![IZW_OutlookCategories](stuff/files/InboxZeroWorkFlow/IZW_OutlookCategories.png)

3. Next, still in **General** tab, jump to the **Accessibility** section and make sure the **Outlook keyboard shortcut** option is selected and **Save** settings. 

![IZW_OutlookShortcuts](stuff/files/InboxZeroWorkFlow/IZW_OutlookShortcuts.png)

4. Next still in **General** tab, jump to the **Search** section and uncheck *"Show top three most relevant results"* and **Save** settings.
![IZW_OutlookRemoveTopResults](stuff/files/InboxZeroWorkFlow/IZW_OutlookRemoveTopResults.png)

5. Make sure that the **Inbox** and **Sent** folder are favorited. 

### Pre-Categories

A category is automatically applied to emails that meet the criteria as laid out in the "Rule" we just created. 

If you want to make a rule please:

1. Select message,
2. Next **three dots** (...),
3. Form menu select **Advanced actions** and **Create rule**, 
4. You should see the same window as below. 

In addition, you are able to manage all the rules

1. Go to _Settings_, next select **Mail** and **Rules**,
2. Then you can select any created rule and edit it
	1. The **first** field allows you to change the **name**
	2. The **second** field allows you to **add conditions related to the sender**,
	3. The third field allows you to add custom actions, in our example will be: 
		1. **Move to** folder **Gravit-Tool**
		2. **Categorize** Newsletter 📧

![IZW_OutlookHowToCreateRules](stuff/files/InboxZeroWorkFlow/IZW_OutlookHowToCreateRules.png)

To recap, we categorize the message and move it to a personalized directory - in this case, it's the newsletter (which is physically in the directory)

### Workflow

> [!quote]+ David Allen
> 
> *"If action can be taken in 2 minutes or less do it right away"*

#### General

Open mailbox and start from **oldest message**:

1. **Shortcut E (archive)** -  for messages from the mailbox for messages that **do not require action**,
2. **Shortcut C (categorize)** - set category for  selected message/messages next enter - when you added category archive message and jump to the next. 
3. **Shortcut B (snooze):** for messages from the mailbox you postpone (you'll get back to them in some time).
4. **Shortcut V (move):** for messages from the mailbox that you want to move to specific folder.

> [!tip]+ Move between sections (Outlook)
>
> - **Shortcut G + I:** jump to **Inbox**,
> - **Shortcut G + S:** jump to **Sent**,
> - **Shortcut G + D:** jump to **Drafts**,

### How to apply to your own inbox

#### Step 1

Go through the past 3-4 weeks of emails in your main box.

#### Step 2 

Either:
1. 🔴 Follow Up,
2. 🟡 Waiting, 
3. 🟢 Read Through,

> [!warning]+ Outlook problem with archive
> 
> If you have a lot of emails - Outlook will not let you archive in bulk

> [!warning]+ Outlook problem with categories
> 
> There's no way for us to view categories in the main inbox without favoriting them. 
> *An email cannot exists in both the main inbox and a folder at the same time and the whole point of pre-categories is to see the email land in your main inbox  acknowledge it then archive it. 
> *You can create folder for each pre-category next you can read as example email from Newsletter category and move to correct folder.

> [!warning]+ Outlook problem with Waiting category
> 
> Read a message -> response -> go to **Sent** folder -> press **C** and then select **Waiting**. 

## References
1. [Inbox Zero for Outlook (Step-by-step Tutorial)! - YouTube](https://www.youtube.com/watch?v=U8LKXbUxf-M)