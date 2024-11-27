function Button(type, symbol, label, color, canFade, critical, summary, action, howTo, extraInfo) {
	this.type = type;
	this.symbol = symbol;
	this.label = label;
	this.color = color;
	this.canFade = canFade;	
	this.critical = critical; //throws alert if not clicked on copy
	this.output = {
		summary: summary,
		action: action,
		howTo: howTo,
	}
	this.extraInfo = extraInfo
}

// Consider setting these up so the text is in the HTML file, hidden unless activated. Could have equal functionality, reduced feature potential, or increased feature potential

// First Meeting
var preferredName = new Button(
	'first',
	'👤',
	'Preferred Name',
	null,
	1,
	0,
	'You told me you prefer to be called <input type="text">.',
	null,
	null,
	null);

var pronunciation = new Button(
	'first',
	'💬',
	'Name Pronunciation',
	null,
	1,
	0,
	'You told me your name is pronounced <input type="text">.',
	null,
	null,
	null);

var background = new Button(
	'first',
	'🛤️',
	'Background',
	null,
	1,
	0,
	'We talked about your background. You told me <input type="text">.',
	null,
	null,
	null);

// Routines
var discussSemester = new Button(
    'routine', 
    '🏫', 
    'Current Semester', 
    null, 
    1, 
    1, 
    'We discussed the current semester, which you said is <input type="text">.', 
    null, 
    null, 
    null
);

var studentQuestions = new Button(
    'routine', 
    '❓', 
    'Student Questions', 
    null, 
    1, 
    0, 
    'You asked about <input type="text">.', 
    null, 
    null, 
    null
);

var discussCourses = new Button(
    'routine', 
    '📝', 
    'Course Plan', 
    null, 
    1, 
    1, 
    'We discussed your course plan for next semester. The current plan is updated and active in DegreeWorks.', 
    'Register for the classes listed in your plan (SEP), which is in DegreeWorks.',
    null, 
    null
);

var registrationDates = new Button(
    'routine', 
    '📅', 
    'Registration Date', 
    null, 
    1, 
    1, 
    'Your ' + linkIt(link.registrationDates, 'registration date') + ' is <input type="text"> at 8am. In-progress credits don\'t count toward totals for registration. TRiO, SAEO, or other exceptions may mean your date is earlier. You can <b>Plan Ahead</b> now (<b>' + linkIt(link.eServices, "eServices") + '</b> > <b>Students</b> > <b>Students - Registration</b> > <b>Plan Ahead</b>), check the night before your registration date, and then finalize registration once it is available to you.', 
    null, 
    null, 
    null
);

var physLab = new Button(
    'routine', 
    '⚗️', 
    'PHYS Lab', 
    null, 
    1, 
    1, 
    'You are slated to enroll in a lower-division PHYS lab class. You will need to register for a lecture section (5 credits) and a lab (0 credits). The code for both will be the same (unlike other departments\' lab classes).', 
    'Register for two sections of your PHYS class, one lecture and one lab (same code).', 
    null, 
    null
);

var survey = new Button(
    'routine', 
    '📊', 
    'Satisfaction Survey', 
    null, 
    1, 
    0, 
    null, 
    'Complete the advising satisfaction survey upon receipt.', 
    null, 
    null
);

var followUp = new Button(
    'routine', 
    '🔔', 
    'Follow-Up', 
    null, 
    1, 
    0, 
    'I will follow up about <input type="text">.', 
    'Keep an eye out for a follow-up email from me.', 
    null, 
    null
);

var additional = new Button(
    'routine', 
    '✏️', 
    'Additional Note', 
    null, 
    0, 
    0, 
    '<input type="text" class="additionalNotes">', 
    null, 
    null, 
    null
);

var additionalTask = new Button(
    'routine', 
    '🔲', 
    'Additional Task', 
    null, 
    0, 
    0,
	null,
    '<input type="text" class="additionalNotes">',
    null, 
    null
);

// Instructions
var degreeWorks = new Button(
    'instruction', 
    '🖥️', 
    'DegreeWorks Access', 
    null, 
    1, 
    0,
	null, 
    null,
    'Access <b>DegreeWorks</b>: Sign in to ' + linkIt(link.eServices, 'eServices') + '. Select the <b>Students</b> tab, then click <b>Degree Works</b> under the <b>Students</b> heading.',
    null
);

var sep = new Button(
    'instruction', 
    '📋', 
    'Student Ed. Plan (SEP)', 
    null, 
    1, 
    0,
	null, 
    null, 
    'Find your <b>Student Educational Plan (SEP)</b>: Sign in to <b>DegreeWorks</b>. Click <b>Plans</b> at the top of the page, then select the plan indicated as <b>Active</b> (with a <b>Y</b> in the <b>Active</b> column). If you want to modify the plan click <b>Save as copy</b> before making any changes.', 
    null
);

var genEds = new Button(
    'instruction', 
    '🏫', 
    'Gen Ed Options', 
    null, 
    1, 
    0, 
	null, 
    null, 
    'Determine <b>ConnectED</b> fulfillment: There are several ways to see which courses will fulfill ConnectED requirements. The ' + linkIt(link.genEds, 'bulletin') + ' contains a full description of requirements, including course options. You can also check requirements in DegreeWorks; on the <b>Audits</b> tab, scroll down to <b>ConnectED - General Education</b>. Finally, you can search directly for courses that fulfill specific ConnectED categories by using the <b>Advanced Search</b> option and selecting an <b>Attribute</b>.', 
    null
);

var registrationInstructions = new Button(
    'instruction', 
    '🗃️', 
    'Registration Process', 
    null, 
    1, 
    0,
	null, 
    null, 
    '<b>Register</b> for classes: Follow ' + linkIt(link.registrationInstructions, 'these instructions') + '. If you need additional help, just let me know!', 
    null
);

var courseScheduler = new Button(
    'instruction', 
    '📅', 
    'College Scheduler', 
    null, 
    1, 
    0,
	null, 
    null, 
    'Generate possible <b>schedules</b> using <b>College Scheduler</b>: Log in to ' + linkIt(link.eServices, 'eServices') + '. Select the <b>Students</b> tab at the top, then scroll down (if needed) to <b>Students - Registration</b> and select <b>Course Scheduler</b>. Select the appropriate semester and make sure only the correct campus(es) is(/are) selected. Add your courses; if desired, add breaks for times during which you would prefer not to have class. After entering this information, click <b>Generate Schedules</b> at the bottom of the page. Once you select a schedule, you can click <b>Send to Shopping Cart</b> to prepare these courses for registration in eServices. <i>Note: Doing this will <b>not</b> reserve your spot. If sections saved in your cart become unavailable, you will need to select alternative options. Check your cart the night before your registration window opens</i>.', 
    null
);

var waitlist = new Button(
    'instruction', 
    '⏳', 
    'Waitlist Process', 
    null, 
    1, 
    0,
	null, 
    null, 
    'Get on a <b>waitlist</b>: Follow ' + linkIt(link.waitlistInstructions, 'these instructions') + '. If you need additional help, just let me know!', 
    null
);

// Actions
var changeMajor = new Button(
    'action', 
    '🔄', 
    'Major/Conc. Change',
    null, 
    1, 
    0,
    'We discussed the possibility of a ' + linkIt(link.changeMajor, 'change of major/concentration') + '. Some programs have ' + linkIt(link.changeMajorRequirements, 'requirements') + ' to change into. <input type="text">', 
    'Complete the major/concentration change form if desired.', 
    null, 
    null
);

var changeMinor = new Button(
    'action', 
    '🔀', 
    'Minor Change', 
    null, 
    1, 
    0, 
    'We discussed the possibility of a ' + linkIt(link.changeMinor, 'change of minor') + '. <input type="text">', 
    'Complete the minor change form if desired.', 
    null, 
    null
);

var fiOverride = new Button(
    'action', 
    '🔎', 
    'FI Override', 
    null, 
    1, 
    0,
	null,
    'Complete the Focused Inquiry override form linked on ' + linkIt(link.fiOverride, 'this page') + ' for UNIV <input type="text">.', 
    null, 
    null
);

var override = new Button(
    'action', 
    '🔧', 
    'Override', 
    null, 
    0, 
    0, 
    'You need an override for <input type="text">. You can find information and forms for overrides by program on ' + linkIt(link.override, 'this page') + '.', 
    'Complete an override form for <input type="text">.', 
    null, 
    null
);

var enrollmentCancellation = new Button(
    'action', 
    '🚫', 
    'Cancel Enrollment', 
    null, 
    1, 
    0,
	'We talked about cancelling your enrollment. You need to do this because <input type="text">.', 
    'Fill out ' + linkIt(link.enrollmentCancellation, 'this form') + ' to cancel your enrollment, housing, and meal plan for a given semester.', 
    null, 
    null
);

var takeCoursesElsewhere = new Button(
    'action', 
    '🌐', 
    'Take Courses Elsewhere', 
    null, 
    1, 
    0,
	'We talked about ' + linkIt(link.takeCoursesElsewhere, 'taking courses outside VCU') + ' The process on the linked page will help ensure courses taken elsewhere will count properly at VCU. You can explore transfer course equivalents ' + linkIt(link.transferEquivalents, 'here') + '. VCU courses that might be of interest to you to take elsewhere include: <input type="text">.',
    'Follow ' + linkIt(link.takeCoursesElsewhere, 'this process') + ' for any courses you plan to take outside VCU.', 
    null, 
    null
);

var nonSpringFall = new Button(
    'action', 
    '☀️', 
    'Non-FS Terms', 
    null, 
    1, 
    0, 
    'VCU classes can be taken during ' + linkIt(link.summer, 'summer') + ', ' + linkIt(link.intersession, 'winter intersession') + ', ' + linkIt(link.jTerm, 'J-term') + ', and ' + linkIt(link.miniterm, 'miniterm') + ' sessions. This might be an option for you for <input type="text">. Please note that taking Summer classes may cost more than increasing Fall/Spring courseloads.', 
    'Explore non-Fall/Spring semester options.', 
    null, 
    null
);

// Resources
var financialAid = new Button(
    'resource', 
    '💰', 
    'Financial Services', 
    null, 
    1, 
    0, 
    'I recommended that you discuss your need with ' + linkIt(link.financialAid, 'Student Financial Services') + '.', 
    'Contact ' + linkIt(link.financialAid, 'Student Financial Services') + ' about <input type="text">.', 
    null, 
    null
);

var writing = new Button(
    'resource', 
    '✍️', 
    'Writing Center', 
    null, 
    1, 
    0, 
    'I recommended that you seek support from the ' + linkIt(link.writing, 'Writing Center') + '.', 
    'Contact the ' + linkIt(link.writing, 'Writing Center') + ' for help with writing.', 
    null, 
    null
);

var military = new Button(
    'resource', 
    '🪖', 
    'Military Services', 
    null, 
    1, 
    0, 
    'I recommended that you discuss your need with ' + linkIt(link.military, 'Military Student Services') + '.', 
    'Contact ' + linkIt(link.military, 'Military Student Services') + ' about <input type="text">.',  
    null, 
    null
);

var transfer = new Button(
    'resource', 
    '📦', 
    'Transfer Center', 
    null, 
    1, 
    0, 
    'I recommended that you communicate with the ' + linkIt(link.transfer, 'Transfer Center') + '.', 
    'Contact the ' + linkIt(link.transfer, 'Transfer Center') + ' about <input type="text">.', 
    null, 
    null
);

var disability = new Button(
    'resource', 
    '♿', 
    'Accessibility/ Opportunity', 
    null, 
    1, 
    0, 
    'I recommended that you communicate with the ' + linkIt(link.disability, 'Student Accessibility and Educational Opportunity') + ' (SAEO) office.', 
    'Contact the ' + linkIt(link.disability, 'SAEO') + ' office about <input type="text">.', 
    null, 
    null
);

var counseling = new Button(
    'resource', 
    '🧠', 
    'Counseling Services', 
    null, 
    1, 
    0, 
    'I recommended that you seek support from ' + linkIt(link.counseling, 'University Counseling Services') + ' (UCS).', 
    'Contact ' + linkIt(link.counseling, 'University Counseling Services') + ' about <input type="text">.', 
    null, 
    null
);

var advocacy = new Button(
    'resource', 
    '✊', 
    'Student Advocacy', 
    null, 
    1, 
    0, 
    'I recommended that you seek support from the ' + linkIt(link.dosa, 'Dean of Student Advocacy Office') + ', which can help with a wide variety of personal needs. If you need assistance, you can complete ' + linkIt(link.requestForAssistance, 'this form') + ', which will be routed to either the ' + linkIt(link.advocacy, 'Office of Student Advocacy') + ' or the Dean of Students\' office as appropriate for your need. If your need can\'t be addressed by either office, they will refer you to the appropriate resource.', 
    'Complete the ' + linkIt(link.requestForAssistance, 'request for assistance form') + ' to get assistance with <input type="text">.', 
    null, 
    null
);

var learning = new Button(
    'resource', 
    '📖', 
    'Learning Center', 
    null, 
    1, 
    0, 
    'I recommended that you seek support from the ' + linkIt(link.learning, 'Campus Learning Center') + ', which coordinates individual Tutoring, individual Academic Coaching, and group Supplemental Instruction.', 
    'Plan to make use of the ' + linkIt(link.learning, 'Campus Learning Center') + ' for <input type="text">.', 
    null, 
    null
);

var global = new Button(
    'resource', 
    '🌍', 
    'Global Ed. Office', 
    null, 
    1, 
    0, 
    'I recommended that you communicate with the ' + linkIt(link.global, 'Global Education Office') + '.', 
    'Contact the ' + linkIt(link.global, 'Global Education Office') + ' about <input type="text">.',
    null, 
    null
);

var health = new Button(
    'resource', 
    '🩺', 
    'Student Health', 
    null, 
    1, 
    0, 
    'I recommended that you seek support from ' + linkIt(link.health, 'University Student Health Services') + '.', 
    'Contact or go to ' + linkIt(link.health, 'University Student Health Services') + ' for <input type="text">.', 
    null, 
    null
);

// Policies
var withdraw = new Button(
    'policy', 
    '↩️', 
    'Withdraw', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.addDropWithdraw, 'Withdraw policy') + '. I recommended that you discuss the ' + linkIt(link.dropWithdrawSFS, 'implications of withdrawal') + ' with ' + linkIt(link.financialAid, 'Student Financial Services') + ' (and ' + linkIt(link.military, 'Military Student Services') + ' if applicable). Withdrawals count as unsuccessfully attempted courses for the purposes of ' + linkIt(link.sap, 'SAP') + ".", 
    'Discuss the ' + linkIt(link.dropWithdrawSFS, 'implications of withdrawal') + ' with all relevant resources, then withdraw from <input type="text"> if desired (via ' + linkIt(link.eServices, 'eServices') + ').',
    null, 
    null
);

var passFail = new Button(
    'policy', 
    '‼️', 
    'Pass/Fail', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.passFail, 'Pass/Fail grade option') + '. The Pass/Fail option can only be applied to <b>15 credit hours</b>. It <b>cannot</b> be used for courses taken as <b>Historical Repeats</b>.', 
    'Consider the ' + linkIt(link.passFail, 'Pass/Fail grade option') + ', then complete the '+ linkIt(link.passFailForm, 'change in grade mode form') + ' for <input type="text"> if desired.',
    null, 
    null
);

var historicalRepeat = new Button(
    'policy', 
    '🔁', 
    'Historical Repeat', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.repeatedCoursePolicy, 'Repeated courses policy') + '. The Historical Repeat option <b>cannot</b> be used with courses taken <b>Pass/Fail</b> or taken at <b>other institutions</b>. Fill out this ' + linkIt(link.historicalRepeatForm, 'form') + ' to initiate the process. The policy can only be used to remove <b>one</b> grade from GPA calculation per course.', 
    'After successfully completing a repeat of <input type="text">, complete the ' + linkIt(link.historicalRepeatForm, 'historical repeat form') + '.', 
    null, 
    null
);

var academicStanding = new Button(
    'policy', 
    '📈', 
    'Academic Standing', 
    null, 
    1, 
    0, 
    'We discussed the importance of remaining in ' + linkIt(link.academicStanding, 'good academic standing') + '. Students with a GPA below 2.0 receive a warning, then probation, and then suspension.', 
    'Make and execute a plan to improve your GPA. Let me know if you need additional resources!', 
    null, 
    null
);

var sap = new Button(
    'policy', 
    '📈', 
    'Satisfactory Progress', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.sap, 'Satisfactory Academic Progress') + ' (SAP) policy. SAP must be maintained to continue to receive ' + linkIt(link.financialAid, 'financial aid') + '. If a student\'s credits become restricted and no schedule changes are made, classes will automatically be dropped starting with the most recently registered until the credit threshold is crossed. Summers count toward SAP only if classes are taken (be wary of taking one class).', 
    'Make and execute a plan to make SAP next semester. Let me know if you need additional resources!', 
    null, 
    null
);

var exceptions = new Button(
    'policy', 
    '⚖️', 
    'Academic Appeals', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.arac, 'Academic Regulations Appeals') + ' (ARAC) process. This option can be pursued when other policies do not apply but there is valid cause for an exception. For students with a current UAA advisor, see ' + linkIt(link.uaaAracForm, 'this page') + '.', 
    'If desired, follow the ' + linkIt(link.uaaAracForm, 'ARAC appeal instructions') + ' to get an exception for <input type="text">.', 
    null, 
    null
);

var readmission = new Button(
    'policy', 
    '🕒', 
    'Semesters Off', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.readmission, 'Readmission guidelines') + '. Students can be gone for two Spring/Fall semesters without needing to apply for readmission.', 
    'Consider your plan to take time off and understand all relevant policies.', 
    null, 
    null
);

var mloa = new Button(
    'policy', 
    '🛌', 
    'Medical LOA', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.mloa, 'Medical Leave of Absence') + ' process. This option can be pursued if the ' + linkIt(link.addDropWithdraw, 'Withdraw') + ' deadline has passed, a retroactive withdrawal using the ' + linkIt(link.arac, 'ARAC') + ' process is not appropriate, and the ' + linkIt(link.readmission, 'readmission') + ' timeline will be exceeded (MLOAs have return requirements, whereas short breaks do not).', 
    'Consider your plan to take time off and understand all relevant policies.', 
    null, 
    null
);

var courseEvaluation = new Button(
    'policy', 
    '🔍', 
    'Course Evaluation', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.courseEvaluation, 'Course Evaluation') + ' process. Course evaluations open at the end of the semester, and students are informed of their availability via email.', 
    'Check your email near the end of the semester and look for ' + linkIt(link.courseEvaluation, 'Course Evaluation') + ' information.', 
    null, 
    null
);

var alternativeCredit = new Button(
    'policy', 
    '📚', 
    'Alt. Credit Sources', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.alternativeCredit, 'Alternative sources of academic credit') + ' policy. Courses can also be ' + linkIt(link.transferEquivalents, 'transferred') + ' from other institutions.', 
    null, 
    null, 
    null
);

// Engineering
var engrOverride = new Button(
    'engineering', 
    '🔧', 
    'ENGR Override', 
    null, 
    1, 
    0, 
	null, 
    'Complete the ' + linkIt(link.engOverride, 'override form') + ' for the appropriate Engineering program to get access to register for <input type="text">.', 
    null,
    null
);

var engineeringProgress = new Button(
    'engineering', 
    '🚀', 
    'ENGR Progress', 
    null, 
    1, 
    0, 
    'We discussed the College of Engineering\'s ' + linkIt(link.engineeringPolicies, 'policy of reasonable progress') + '. <input type="text">', 
    'Make and execute a plan to make reasonable progress in Engineering. Let me know if you need additional resources!', 
    null, 
    null
);

var mathAleks = new Button(
    'engineering', 
    '➗', 
    'Math ALEKS', 
    null, 
    1, 
    0, 
    'I recommend you make use of the ' + linkIt(link.mathAleks, 'ALEKS process for Math') + '. Students in the College of Engineering can increase their placement by 2 levels (other students can only raise it by 1). After raising your placement score, you need to report it using ' + linkIt(link.mathAleksReport, 'this form') + '.', 
    'As needed, take the ' + linkIt(link.mathAleks, 'MATH placement test') + ' and complete modules up to <input type="text">. When done, complete ' + linkIt(link.mathAleksReport, 'this form') + '.', 
    null, 
    null
);

var chemAleks = new Button(
    'engineering', 
    '🧪', 
    'Chemistry ALEKS', 
    null, 
    1, 
    0, 
    'I recommend you make use of the ' + linkIt(link.chemAleks, 'ALEKS process for Chemistry') + '. Placement results can be either CHEM 100 or CHEM 101. Placements of CHEM 100 can be increased to CHEM 101 via completion of learning modules. Retaining a placement of CHEM 100 means you must complete CHEM 100 with a B or higher before you can take CHEM 101. The pass/fail option cannot be used for this prerequisite requirement.', 
    'As needed, take the ' + linkIt(link.chemAleks, 'CHEM placement test') + ' and complete modules to attain placement in CHEM 101.',  
    null, 
    null
);

var businessMajorChange = new Button(
    'engineering', 
    '💼', 
    'Business Major Info', 
    null, 
    1, 
    0,
	'You expressed interest in changing your major to join the School of Business. You must attend a ' + linkIt(link.businessMajorChange, 'change of major session') + ' before completing the major change form.',
    'Attend a ' + linkIt(link.businessMajorChange, 'change of major session') + ' with the School of Business.',  
    null, 
    null
);

var preMed = new Button(
    'engineering', 
    '💉', 
    'Pre-Med Info', 
    null, 
    1, 
    0, 
    'You can find the requirements for the Pre-Med minor ' + linkIt(link.preMed, 'here') + '.', 
    null, 
    null, 
    null
);

var practicalAI = new Button(
    'engineering', 
    '🤖', 
    'Practical AI Minor', 
    null, 
    1, 
    0, 
    'If you need information about the Practical AI minor through the Interdisciplinary Studies program, you should contact Dr. Mariah Crilley at ' + linkIt('mailto:mtcrilley@vcu.edu', 'mtcrilley@vcu.edu') + '.', 
    null, 
    null, 
    null
);

var physOverride = new Button(
    'engineering', 
    '⚛️', 
    'PHYS Override', 
    null, 
    1, 
    0,
	null, 
    'Request an override for PHYS <input type="text"> using ' + linkIt(link.physOverride, 'this form') + '.', 
    null, 
    null
);

var mathOverride = new Button(
    'engineering', 
    '∑', 
    'MATH Override', 
    null, 
    1, 
    0,
	null,
    'Request an override for MATH <input type="text"> using the form linked on ' + linkIt(link.mathOverride, "this page") + ".", 
    null, 
    null
);

var chemOverride = new Button(
    'engineering', 
    '🧪', 
    'CHEM Override', 
    null, 
    1, 
    0,
	null,
    'Request an override for CHEM/Z <input type="text"> using the form linked on ' + linkIt(link.chemOverride, "this page") + ".", 
    null, 
    null
);

var chemSeats = new Button(
    'engineering', 
    '💺', 
    'CHEM Seats', 
    null, 
    1, 
    0, 
    'The Chemistry department rolls out more seats over time for their classes. Additionally, seats will open after final grades are submitted since some people will not pass prerequisite courses.',
	'Check once every few days for open seats in CHEM/Z <input type="text">. After final grades are due for the semester, start checking daily.',	
    null, 
    null
);