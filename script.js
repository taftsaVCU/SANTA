function addText(html, where) {
	if (html !="") {
		const rightDiv = document.getElementById('right');
	    const newText = document.createElement('p');
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
	
	    // Append the new text entry to the right div
		const howToSpan = document.getElementById('howTo');
		const summarySpan = document.getElementById('summary');
	    
		switch (where) {
	        case 'how to':
				howToSpan.appendChild(newText);
	            break;

			default:
				summarySpan.appendChild(newText);
	    }
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
    const rightDiv = document.getElementById('right');
    const inputs = Array.from(rightDiv.getElementsByTagName('input'));
    const spans = [];

    // Replace input fields with their values and log the values
    inputs.forEach(input => {
        const span = document.createElement('span');
        span.textContent = input.value;
        input.parentNode.replaceChild(span, input);
        spans.push(span);
        console.log("handled " + span.textContent);
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


function createButton(text, onClickFunction) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClickFunction;
    return button;
}

function initializeButtons() {
    const leftDiv = document.getElementById('left');
	const routinesDiv = document.getElementById('routines');
	const actionsDiv = document.getElementById('actions');
	const resourcesDiv = document.getElementById('resources');
	const policiesDiv = document.getElementById('policies');
	const instructionsDiv = document.getElementById('instructions');
	const engineeringDiv = document.getElementById('engineering');
	const firstDiv = document.getElementById('first');

    // Automatically gather all routines, resources, and policies
    for (let key in window) {
	    let item = window[key];
	    let button;
	
	    switch (true) {
	        case item instanceof FirstMeeting:
	            button = createButton(item.name, function() {
	                addText(item.text);
	            });
	            firstDiv.appendChild(button);
	            break;
			case item instanceof Instruction:
	            button = createButton(item.name, function() {
	                addText(item.text, 'how to');
	            });
	            instructionsDiv.appendChild(button);
	            break;
			case item instanceof Action:
	            button = createButton(item.name, function() {
	                addText(item.text);
	            });
	            actionsDiv.appendChild(button);
	            break;
	        case item instanceof Routine:
	            button = createButton(item.name, function() {
	                addText(item.text);
	            });
	            routinesDiv.appendChild(button);
	            break;
	        case item instanceof Resource:
	            button = createButton(item.name, function() {
	                addText(referTo(item));
	            });
	            resourcesDiv.appendChild(button);
	            break;
	        case item instanceof Policy:
	            button = createButton(item.buttonName, function() {
	                addText(discussPolicy(item));
	            });
	            policiesDiv.appendChild(button);
	            break;
			case item instanceof Engineering:
	            button = createButton(item.name, function() {
	                addText(item.text);
	            });
	            engineeringDiv.appendChild(button);
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