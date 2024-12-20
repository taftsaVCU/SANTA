function addText(html, where) {
	if (html != null) {
		const rightDiv = document.getElementById('right');
		var newText;
		
		//Prep type of element to be added based on location
		if (where == 'task') {
			newText = document.createElement('li');
		} else {
			newText = document.createElement('p');
		};
		
	    newText.innerHTML = html;
	    newText.className = 'text-entry';
	
	    // Add event listener to the div for deletion
	    newText.addEventListener('click', function(event) {
	        // Check if the clicked element is a link
	        if (event.target.tagName !== 'A' && event.target.tagName !== 'INPUT') {
	            if (confirm('Do you want to delete this entry?')) {
	                newText.remove();
	            }
	        }
	    });
		
		document.getElementById(where).appendChild(newText);
	};
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    setTimeout(function() {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}

function copyText() {
    const rightDiv = document.getElementById('noteOutput');
    const inputs = Array.from(rightDiv.getElementsByTagName('input'));
    const spans = [];
	
	//Handle Critical Buttons
	var alertList = document.getElementsByClassName('critical');
	var alertText = 'You haven\'t used the following "critical" buttons: ';
	var showAlert = 0;
	
	for (var i = 0; i < alertList.length; i++) {
		if (!alertList[i].classList.contains('clicked')) {
			showAlert = 1;
			if (alertText == 'You haven\'t used the following "critical" buttons: ') {
				alertText += '[' + alertList[i].firstChild.firstChild.firstChild.lastChild.innerHTML + ']';
			} else {
				alertText += ', [' + alertList[i].firstChild.firstChild.firstChild.lastChild.innerHTML + ']';
			};		
		};
	};
	
	if (showAlert) {
		alert(alertText);
	}
	
    // Replace input fields with their values and log the values
    inputs.forEach(input => {
        const span = document.createElement('span');
        span.textContent = input.value;
        input.parentNode.replaceChild(span, input);
        spans.push(span);
        console.log('handled ' + span.textContent);
    });

    // Copy the content
    const range = document.createRange();
    range.selectNodeContents(rightDiv);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        showToast('Text copied to clipboard!');
    } catch (err) {
        showToast('Failed to copy text.');
    }

    // Restore input fields
    spans.forEach(span => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        span.parentNode.replaceChild(input, span);
    });

    selection.removeAllRanges();
}


function createButton(symbol, label, onClickFunction) {
    const button = document.createElement('button');
    button.innerHTML = '<table class="buttonLabel"><tr><td class="symbol">' + symbol + '</td><td class="label">' + label + '</td></tr></table>';
    button.onclick = onClickFunction;
    return button;
}

function initializeButtons() {
    const leftDiv = document.getElementById('left');

    // Automatically gather all buttons
    for (let key in window) {
	    let item = window[key];
	    let button;
	
	    switch (true) {
			case item instanceof Button:
				button = createButton(item.symbol, item.label, function() {
	                addText(item.output.summary, 'summary');
					addText(item.output.task, 'task');
					addText(item.output.howTo, 'howTo');
	            });
				
				//Prevent fade
				if (!item.canFade) {button.classList.add('persistent');};
				if (item.critical) {button.classList.add('critical');};
				
				document.getElementById(item.type).appendChild(button);
	            break;
	    }
	}
	
	document.querySelectorAll('button').forEach(button => {
	    if (button.id !== 'copyButton') {
	        button.addEventListener('click', () => {
	            button.classList.add('clicked');
	        });
	    }
	});
}

// Initialize buttons when the page loads
window.onload = initializeButtons;