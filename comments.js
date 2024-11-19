function Button(type, symbol, label, color, canFade, critical, summary, action, how, extraInfo) {
	this.type = type;
	this.symbol = symbol;
	this.label = label;
	this.color = color;
	this.canFade = canFade;	
	this.critical = critical; //throws alert if not clicked on copy
	this.output = {
		summary: summary,
		action: action,
		how: how,
	}
	this.extraInfo = extraInfo
}


//First Meeting
function FirstMeeting(name, text) {
	this.name = name;
	this.text = text;
}

var preferredName = new FirstMeeting(
	'👤 Preferred Name',
	"You told me you prefer to be called <input type='text'>."
);

var pronunciation = new FirstMeeting(
	'💬 Name Pronunciation',
	"You told me your name is pronounced <input type='text'>."
);

//Routines
function Routine(name, text) {
	this.name = name;
	this.text = text;
}

//var programCheck = new Routine('Program Vibe Check', '',);

var discussSemester = new Routine(
	'🏫 Current Semester',
	'We discussed the current semester, which is going <input type="text">'
);

var studentQuestions = new Routine(
	'❓ Student Questions',
	'You asked about <input type="text">.'
);

var discussCourses = new Routine(
	'📝 Course Plan',
	'We discussed your course plan for next semester. The current plan is updated and active in DegreeWorks.'
);

var physLab = new Routine(
	'⚗️ PHYS Lab',
	'You are slated to enroll in a lower-division PHYS lab class. You will need to register for a lecture section (5 credits) and a lab (0 credits). The code for both will be the same (unlike other departments\' lab classes).'
);

var registrationDates = new Routine(
	'📅 Registration Dates',
	'Your '
	+ linkIt(link.registrationDates, "registration date")
	+ ' is <input type="text"> at 8am.'
	+ ' In-progress credits don\'t count toward totals for registration. TRiO, SAEO, or other exceptions may mean your date is earlier. You can <b>Plan Ahead</b> now (<b>'
	+ linkIt(link.eServices, "eServices")
	+ '</b> > <b>Students</b> > <b>Students - Registration</b> > <b>Plan Ahead</b>), check the night before your registration date, and then finalize registration once it is available to you.',
	""
);

var survey = new Routine(
	'📊 Satisfaction Survey',
	'I reminded you to complete the Advising Satisfaction Survey when you receive it via email.'
);

var followUp = new Routine(
	'🔔 Follow-Up',
	'I will follow up about <input type="text">.'
);

var additional = new Routine(
	'✏️ Additional Notes',
	'<input type="text" id="additionalNotes">'
);

//Actions
function Action(name, text) {
	this.name = name;
	this.text = text;
}

var changeMajor = new Action(
	'🔄 Major/Concentration Change',
	'We discussed the possibility of a '
	+ linkIt(link.changeMajor, "change of major/concentration")
	+ ". <input type='text'>"
);

var changeMinor = new Action(
	'🔀 Minor Change',
	'We discussed the possibility of a '
	+ linkIt(link.changeMinor, "change of minor")
	+ ". <input type='text'>"
);

var fiOverride = new Action(
	'🔧 FI Override',
	'Fill out '
	+ linkIt(link.fiOverride, 'this form')
	+ ' to request an override for Focused Inquiry classes.'
);

var enrollmentCancellation = new Action(
	'🚫 Cancel Enrollment',
	'Fill out '
	+ linkIt(link.enrollmentCancellation, 'this form')
	+ ' to cancel your enrollment for a given semester. This will also cancel your housing and meal plan.'
);

var takeCoursesElsewhere = new Action(
	'🌐 Take Courses Elsewhere',
	'Follow '
	+ linkIt(link.takeCoursesElsewhere, 'this process')
	+ '—including filling out '
	+ linkIt(link.takeCoursesElsewhereForm, 'this form')
	+ '—to help ensure courses taken elsewhere will count properly at VCU. You can explore transfer equivalent courses '
	+ linkIt(link.transferEquivalents, 'here')
	+ '.'
);

var nonSpringFall = new Action(
	'☀️ Non-FS Terms',
	'VCU classes can be taken during '
	+ linkIt(link.summer, 'summer')
	+ ', '
	+ linkIt(link.intersession, 'winter intersession')
	+ ', '
	+ linkIt(link.jTerm, 'J-term')
	+ ', and '
	+ linkIt(link.miniterm, 'miniterm')
	+ ' sessions. This might be an option for you for <input type="text">.'
);


//Resources
function referTo(resource) {
	return 'I suggested you connect with '
		+ linkIt(resource.url, resource.name)
		+ ' to discuss <input type="text">'
}

function Resource(name, text, url) {
    this.name = name;
    this.text = text;
    this.url = url;
}

var financialAid = new Resource(
	"💰 Financial Services",
	"Student Financial Services",
	"https://sfs.vcu.edu/"
);

var writing = new Resource(
	"✍️ Writing Center",
	"",
	"https://writing.vcu.edu/"
);

var military = new Resource(
	"🪖 Military Services",
	"Military Student Services",
	"https://militaryservices.vcu.edu/"
);

var transfer = new Resource(
	"📦 Transfer Center",
	"",
	"https://transfer.vcu.edu/"
);

var disability = new Resource(
	"♿ Accessibility and Opportunity",
	"Student Accessibility and Educational Opportunity (SAEO)",
	"https://saeo.vcu.edu/"
)
	
var counseling = new Resource(
	"🧠 Counseling Services",
	"University Counseling Services (UCS)",
	"https://counseling.vcu.edu/"
)

var advocacy = new Resource(
	"✊ Office of Student Advocacy",
	"",
	"https://advocacy.vcu.edu/"
)

var learning = new Resource(
	"📖 Learning Center",
	"Campus Learning Center (SI/Tutoring/Coaching)",
	"https://clc.vcu.edu/"
)
	
var dos = new Resource(
	"🎓 Dean of Students",
	"If you need assistance, you can complete " + linkIt(link.requestForAssistance, 'this form') + '.',
	"https://dos.vcu.edu/"
)
	
var global = new Resource(
	"🌍 Global Education Office",
	"",
	"https://global.vcu.edu/"
)
	
var health = new Resource(
	"🩺 Student Health",
	"University Student Health Services",
	"https://health.students.vcu.edu/"
)
	
	

//Policies
function discussPolicy(policy) {
	return 'We discussed the '
		+ linkIt(policy.url, policy.name)
		+ '. <input type="text">'
		+ ' '
		+ policy.text
}

function Policy(buttonName, name, text, url, notes) {
	this.buttonName = buttonName,
    this.name = name;
    this.text = text;
    this.url = url;
	this.notes = notes;
}

var withdraw = new Policy(
	"↩️ Withdraw",
    "Withdraw Policy",
    "I recommended that you discuss "
	+ linkIt(link.dropWithdrawSFS, 'implications of withdrawal')
	+ " with "
	+ linkIt(financialAid.url, financialAid.name)
	+ " (and "
	+ linkIt(military.url, military.name)
	+ " if applicable). Withdrawals count as unsuccessfully attempted courses for the purposes of "
	+ linkIt(link.sap, "SAP")
	+ ".",
	link.addDropWithdraw
);

var passFail = new Policy(
	"‼️ Pass/Fail",
	"Pass/Fail grade option",
	"The Pass/Fail option can only be applied to <b>15 credit hours</b>. It <b>cannot</b> be used for courses taken as <b>Historical Repeats</b>.",
	link.passFail
);

var historicalRepeat = new Policy(
	"🔁 Historical Repeat",
	"Repeated courses policy",
	"The Historical Repeat option <b>cannot</b> be used with courses taken <b>Pass/Fail</b> or taken at <b>other institutions</b>."
	+ " Fill out this "
	+ linkIt(link.historicalRepeatForm, "form")
	+ " to initiate the process."
	+ " The policy can only be used to nullify <b>one</b> grade per course.",
	link.repeatedCoursePolicy
);

var academicStanding = new Policy(
	"📈 Academic Standing",
	"importance of remaining in good standing",
	"Students with a GPA below 2.0 receive a warning, then probation, and then suspension.",
	link.academicStanding
);

var sap = new Policy(
	"📈 Satisfactory Academic Progress (SAP)",
	"Satisfactory Academic Progress (SAP) policy",
	"SAP must be maintained to continue to receive "
	+ linkIt(financialAid.url, "financial aid")
	+ "."
	+ " If a student's credits become restricted and no schedule changes are made, classes will automatically be dropped starting with the most recently registered until the credit threshold is crossed."
	+ " Summers count toward SAP only if classes are taken (be wary of taking one class).",
	link.academicStanding
);

var exceptions = new Policy(
	"⚖️ Academic Appeals",
	"Academic Regulations Appeals (ARAC) process",
	" This option can be pursued when other policies do not apply but there is valid cause for an exception."
	+ " For students with a current UAA advisor, see "
	+ linkIt(link.uaaAracForm, "this page")
	+ ".",
	link.arac
)
	
var readmission = new Policy(
	"🕒 Semesters Off",
	"Readmission policy",
	"",
	link.readmission
)
	
var mloa = new Policy(
	"🛌 Medical Leave of Absence",
	"Medical Leave of Absence process",
	" This option can be pursued if the "
	+ linkIt(link.addDropWithdraw, "Withdraw")
	+ " deadline has passed, a retroactive withdrawal using the "
	+ linkIt(link.arac, "ARAC")
	+ " process is not appropriate, and the "
	+ linkIt(link.readmission, 'readmission')
	+ " timeline will be exceeded (MLOAs have return requirements, whereas short breaks do not).",
	link.mloa
)
	
var courseEvaluation = new Policy(
	"🔍 Course Evaluation",
	"Course Evaluation process",
	" Course evaluations open at the end of the semester, and students are informed of their availability via email.",
	link.courseEvaluation
)
	
var additionalCredit = new Policy(
	"📚 Alternative Credit Sources",
	"Alternative sources of academic credit policy",
	"Courses can also be "
	+ linkIt(link.transferEquivalents, "Transferred")
	+ " from other institutions.",
	link.additionalCredit
)
	
//Instructions
function Instruction(name, text, notes) {
    this.name = name;
    this.text = text;
	this.notes = notes;
}

var degreeWorks = new Instruction(
	"🖥️ DegreeWorks Access",
	"To access <b>DegreeWorks</b>, first sign in to "
	+ linkIt(link.eServices, "eServices")
	+ ". Select the <b>Students</b> tab, then click <b>Degree Works</b> "
	+ "under the <b>Students</b> heading.",
	"",
);

var sep = new Instruction(
	"📋 Student Education Plan (SEP)",
	"To access your <b>Student Educational Plan (SEP)</b>, first sign in to <b>DegreeWorks</b>. "
	+ "Click <b>Plans</b> at the top of the page, then select the plan indicated as <b>Active</b> "
	+ "(with a <b>Y</b> in the <b>Active</b> column). If you want to modify the plan, "
	+ "click <b>Save as copy</b> before making any changes.",
	"",
);

var genEds = new Instruction(
	'🏫 Gen Ed Options',
	'There are several ways to see which courses will fulfill Gen Ed requirements. The '
	+ linkIt(link.genEds, 'bulletin')
	+ '	contains a full description of requirement, including course options. You can also check requirements in DegreeWorks; on the <b>Audits</b> tab, scroll down to <b>ConnectED - General Education</b>.',
	"",
);

var registrationInstructions = new Instruction(
	"🗃️ Registration Process",
	linkIt(link.registrationInstructions, "Registration instructions")
	+ " are available online. If you need additional help, just let me know!",
	"",
);

var courseScheduler = new Instruction(
	"📅 College Scheduler",
	"To find possible schedules for the courses you need to take, use <b>College Scheduler</b>. You can access this tool through "
	+ linkIt(link.eServices, "eServices")
	+ ". Select the <b>Students</b> tab at the top, then scroll down (if needed) to <b>Students - Registration</b> and select <b>Course Scheduler</b>."
	+ " Select the appropriate semester and make sure only the correct campus(es) is(/are) selected. Add your courses; if desired, add breaks for times during which you would prefer not to have class."
	+ " After entering this information, click <b>Generate Schedules</b> at the bottom of the page. Once you select a schedule, you can click <b>Send to Shopping Cart</b> to prepare these"
	+ " courses for registration in eServices. <i>Note: Doing this will <b>not</b> reserve your spot. If sections saved in your cart become unavailable, you will need to select alternative options."
	+ "Check your cart the night before your registration window opens</i>.",
	"",
);

var waitlist = new Instruction(
	"⏳ Waitlist Process",
	linkIt(link.waitlistInstructions, "Waitlist instructions")
	+ " are available online. If you need additional help, just let me know!",
	"",
);


//Engineering
function Engineering(name, text, notes) {
    this.name = name;
    this.text = text;
	this.notes = notes;
}

var engrOverride = new Engineering(
	"🔧 Override",
	"You need to complete the "
	+ linkIt(link.engOverride, "override form")
	+ " for the appropriate Engineering program. <input type='text'>",
	"",
);

var engineeringProgress = new Engineering(
	"🚀 Engineering: Reasonable Progress",
	"We discussed the College of Engineering's "
	+ linkIt(link.engineeringPolicies, 'policy of reasonable progress')
	+ '. <input type="text">',
	"",	
)
	
var mathAleks = new Engineering(
	"➗ Math ALEKS",
	"I recommend you make use of the "
	+ linkIt(link.mathAleks, "ALEKS process for Math")
	+ '. <input type="text">',
	"",
)
	
var chemAleks = new Engineering(
	"🧪 Chemistry ALEKS",
	"I recommend you make use of the "
	+ linkIt(link.chemAleks, "ALEKS process for Chemistry")
	+ '. <input type="text">',
	"",
)
	
var businessMajorChange = new Engineering(
	"💼 Business Major Info",
	"If you are interested in changing your major to join the School of Business, you will need to attend a "
	+ linkIt(link.businessMajorChange, "change of major session")
	+ '.',
	"",
)