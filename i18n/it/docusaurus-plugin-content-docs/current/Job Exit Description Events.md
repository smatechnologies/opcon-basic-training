---
sidebar_panel: 'Job Exit Description Events'
---

<figure>
    <audio
        controls
        src="audiobasic/EventsBasedOnJobExitDescription.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

* When defining an Event based on Exit Description two things must be set:
    * **Comparison Operator**
        * Be careful using anything but **Equal To**
    * Each Operating System has rules for Exit Description Names and Values
    * UNIX – Use **Contains** unless the **full Exit Code** is spelled out 
        * If Equal To is selected, the **full Exit Code** is required _including preceding zeros and any colons, plus signs, etc._
    * **Windows** – Use the final digits
        * ```100``` instead of ```000000000100```

<a href="imgbasic/354.png" target="_blank"><img src="imgbasic/354.png" width="500"></img></a>  
<a href="imgbasic/355.png" target="_blank"><img src="imgbasic/355.png" width="500"></img></a>  
