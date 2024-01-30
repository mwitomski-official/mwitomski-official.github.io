---
title: "Gmail - Inbox Zero Workflow - Jeff Su"
description: "This is an elobaration on the blog post created by Jeff Su."
author: Mateusz Witomski | Orion
date: 2022-09-21 21:26
type: literatureNote
tags:
  - productivity
  - inbox-zero-workflow
enableToc: true # do not show a table of contents on this page
openToc: false # whether to by-default open or close the table of contents on each page
---

## Description

Previous note [📚 Inbox Zero Workflow - Tiago Forte](📚%20Inbox%20Zero%20Workflow%20-%20Tiago%20Forte.md) described how the workflow works if we focused on downstream systems like Google Calendar, Task and Keep. In this note I would like to focus on process and changes related with inbox described by [Jeff Su](Jeff%20Su).

![IZW_Mailbox |800](stuff/files/InboxZeroWorkFlow/IZW_Mailbox.webp)

## Actions

### Strip email down to its core function

1. **Turn on** Auto-advance - Show the next conversation instead of your inbox after you delete, archive or mute a conversation. You can select whether to advance to the next or previous conversation in the "General" Settings page,
2. **Turn on** Keyboard shortcuts,
3. **Change** design of main menu.

> [!tip]+ Inbox configuration (Gmail)
>
> **Auto-advance**
>
> - *Settings* > **Advanced** > set *Auto-advance* to *Enable*
> - *Settings* > _**General**_ > set _Auto-advance_ to _Go to the next (newer) conversation_
>
> **Keyboard shortcuts**
>
> - *Settings* > _**General**_ > set _Keyboard shortcuts_ to _Keyboard shortcuts on_
>
> **Design of main menu**
>
> - *Settings* > _**General**_ > set _Main menu_ to _New view_

### Create new labels

We are able to categorize most messages as follows:
1. 🔴 **Action items** - Emails you need to **follow up** on,
2. 🟠 **Awaiting Reply** - Emails you're **waiting for someone else to take action on**,
3. 🟢 **Read Through Later** - Emails that you might want to **"Read Through"** again because they **contain useful info**,
4. 🔵 **Others like:** _Archive_, _Mute_, _Snooze_, _Delete_ (in my scope I would like to use only **Archive** and **Delete**).

Create labels:
1. **Create** _"Follow Up"_ label and set color 🔴,
2. **Create** _"Waiting"_ label and set color 🟠,
3. **Create** _"Read Through"_ label and set color 🟢.

> [!hint]+ Set label (Gmail)
>
> **Gmail** shortcut **V** to **set label** and **archive** as one operation - you can also use **L (set label)** and next **E (archive)**.

### Enable Multiple Inboxes

> [!tip]+ Inbox configuration (Gmail)
>
> **Multiple Inboxes**
>
> - *Settings* > **Inbox** > set  _Inbox type_ to _Multiple Inboxes_
>
> **Multiple inbox sections**
>
> - *Settings* > _**Inbox**_ > set **Section 1** to _l:follow-up_ (Search query column) and _Action Items_ (Section name (optional) column) 🔴
> - *Settings* > _**Inbox**_ > set **Section 2** to _l:waiting_ (Search query column) and _Awaiting Reply_ (Section name (optional) column) 🟠
> - *Settings* > _**Inbox**_ > set **Section 3** to _l:read-through_ (Search query column) and _Action Items_ (Section name (optional) column) 🟢
>
> **Maximum page size**
>
> - *Settings* > _**Inbox**_ > set _Maximum page size_ to _10_
>
> **Multiple inbox position**
>
> - *Settings* > _**Inbox**_ > set _Multiple inbox position_ to _Right of the inbox_
>
> **Importance markers**
>
> - 🛠 *Settings* > _**Inbox**_ > set *Importance marker*s to _No markers_

### 💹 Workflow

#### General

Open mailbox and start from **oldest message**:
1. **Gmail shortcut V (set label and archive):** for messages from the mailbox you categorize based on description above,
2. **Gmail shortcut M (mute and archive):** for messages from the mailbox you reply to and do not want to be notified further,
3. **Gmail shortcut B (snooze):** for messages from the mailbox you postpone (you'll get back to them in some time).

> [!tip]+ Move between sections (Gmail)
>
> - **Gmail shortcut G + I:** jump to **Inbox**,
> - **Gmail shortcut G + S:** jump to **Sent**,
> - **Gmail shortcut G + D:** jump to **Drafts**,
> - **Gmail shortcut G + A:** jump to **All Mail**.

#### Waiting label (🟠)

Emails labeled as _"Waiting"_ - someone else needs to take action, **but you're still responsible for the outcome**. This reminds you to chase the other person for that information if they haven't gotten back to you in the few days.

> [!tip]+ Waiting label
>
> **Manually**
>
> - Go to **Sent** and next set label _"Waiting"_ (🟠) for each email which you want,
>
> **Automatically**
>
> - *Settings* > **Filter and Blocked Addresses** > press _Create a new filter_
>   - Set field _To_ as **your email address** and "_+waiting_" string, example: mateusz.witomski.official+waiting@gmail.com
>   - Select "_Skip the Inbox (Archive it)_",
>   - Select "_Mark as read_",
>   - Set for "_Apply the label_" as "_Waiting_"
>   - Click "_Create filter_" .
>
> **Process**
>
> - Create new message
> - Add in **BCC** field your email with +waiting marker (**BCC is not visible for others**)

## References

1. [My Complete Inbox Zero Workflow (in 2022)](https://www.youtube.com/watch?v=al1QXFQjq1s),
2. [Inbox Zero Tutorial (Step-by-step Instructions)](https://www.youtube.com/watch?v=9ql1CQfxWxQ)
3. [Jeff Su Youtube channel](https://www.youtube.com/c/JeffSu)
