function Button(type, symbol, label, color, canFade, critical, summary, task, howTo, extraInfo) {
	this.type = type;
	this.symbol = symbol;
	this.label = label;
	this.color = color;
	this.canFade = canFade;	
	this.critical = critical; //throws alert if not clicked on copy
	this.output = {
		summary: summary,
		task: task,
		howTo: howTo,
	}
	this.extraInfo = extraInfo
}

// Consider setting these up so the text is in the HTML file, hidden unless activated. Could have equal functionality, reduced feature potential, or increased feature potential
// Consider adding a "meeting types" attribute to Button and start by having the user indicate the meeting type (classes, struggles, major change, etc.; tis might not be best)

// Before Meeting
var checkWarnings = new Button(
	'before',
	'⚠️',
	'Check Holds, Warnings, Standing',
	null,
	1,
	1,
	null,
	null,
	null,
	null);

var checkHistory = new Button(
	'before',
	'⏮️',
	'Check History',
	null,
	1,
	1,
	null,
	null,
	null,
	null);

var checkCommunication = new Button(
	'before',
	'💬',
	'Check Prior Communications',
	null,
	1,
	1,
	null,
	null,
	null,
	null);

var checkClasses = new Button(
	'before',
	'📚',
	'Check Classes',
	null,
	1,
	1,
	null,
	null,
	null,
	null);

var checkRegistration = new Button(
	'before',
	'🗂️',
	'Check Registration',
	null,
	1,
	1,
	null,
	null,
	null,
	null);

var checkRepeats = new Button(
	'before',
	'🔁',
	'Check Repeats w/o Historical Repeat',
	null,
	1,
	1,
	null,
	null,
	null,
	null);


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
	'🗣️',
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

var survey = new Button(
    'first', 
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
    'We discussed your ' + linkIt(link.degreeWorksSep, 'course plan') + ' for next semester. The current plan is updated and active in ' + linkIt(link.degreeWorks, 'DegreeWorks') + '.', 
    'Register for the classes listed in your ' + linkIt(link.degreeWorksSep, 'plan') + ' (SEP).',
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

var followUp = new Button(
    'routine', 
    '🔔', 
    'Follow-Up', 
    null, 
    1, 
    0, 
    null, 
    'Keep an eye out for a follow-up email from me about <input type="text">.', 
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

//Checks
var creditCheck = new Button(
    'check', 
    '🔢', 
    'Credit Counts', 
    null, 
    1, 
    0,
	'You may have registration requirements for financial aid, scholarships, programs, etc. Most students need to register for at least 12 credits per semester (full-time) for financial aid. Some students need to register for 28 credits per year for scholarships.',
    null,
    null, 
    null
);

var physLab = new Button(
    'check', 
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

var ferpa = new Button(
    'check', 
    '📜', 
    'FERPA', 
    null, 
    1, 
    1, 
    '<input type="text"> was with you during your appointment. I requested and received verbal permission from you to share your ' + linkIt(link.ferpa, 'FERPA') + '-protected information with them. You can see more information about VCU\'s FERPA-related policies (including consent forms) ' + linkIt(link.ferpaVcu, 'here') + '.', 
    null, 
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
    'Access <b>DegreeWorks</b>: In ' + linkIt(link.eServices, 'eServices') + ', select the <b>Students</b> tab and click <b>Degree Works</b> under the <b>Students</b> heading. There is also a link to DegreeWorks in ' + linkIt(link.navigate, 'Navigate') + '. Alternatively, use ' + linkIt(link.degreeWorks, 'this link') + ' or a bookmarked link in your browser.',
    null
);

var sep = new Button(
    'instruction', 
    '📋', 
    'Student Educational Plan (SEP)', 
    null, 
    1, 
    0,
	null, 
    null, 
    'Find your <b>Student Educational Plan (SEP)</b>: Sign in to ' + linkIt(link.degreeWorks, 'DegreeWorks') + ', then click <b>Plans</b> at the top of the page (Plans tab may be unavailable in app). Alternatively, use ' + linkIt(link.degreeWorksSep, 'this link') + ' or a bookmarked link in your browser. Then, select the plan indicated as <b>Active</b> (with a <b>Y</b> in the <b>Active</b> column). If you want to modify the plan, click <b>Save as copy</b> before making any changes.', 
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
    'Determine <b>ConnectED</b> fulfillment: There are several ways to see which courses will fulfill ConnectED requirements. (1) The ' + linkIt(link.genEds, 'bulletin') + ' contains a full description of requirements, including course options. (2) You can check requirements in ' + linkIt(link.degreeWorks, 'DegreeWorks') + '; on the <b>Audits</b> tab, scroll down to <b>ConnectED - General Education</b>. (3) You can search directly in the registration system for courses that fulfill specific ConnectED categories by using the <b>Advanced Search</b> option and selecting an <b>Attribute</b>.',
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
    'Generate possible <b>schedules</b> using ' + linkIt(link.collegeScheduler, 'College Scheduler') + ': Use one of the links in this paragraph or go to ' + linkIt(link.eServices, 'eServices') + ' > <b>Students</b> > <b>Students - Registration</b> > ' + linkIt(link.collegeScheduler, 'College Scheduler') + '. Select the appropriate semester and make sure only the correct campus(es) is(/are) selected. Add your courses; if desired, add breaks for times during which you would prefer not to have class. After entering this information, click <b>Generate Schedules</b> at the bottom of the page. Once you select a schedule, you can click <b>Send to Shopping Cart</b> to prepare these courses for registration in eServices. <i>Note: Doing this will <b>not</b> reserve your spot. If sections saved in your cart become unavailable, you will need to select alternative options. Check your cart the night before your registration window opens</i>.', 
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

var trackCourse = new Button(
    'instruction', 
    '💺', 
    'Track Open Seats', 
    null, 
    1, 
    0,
	null,
	null, 
    'Track open <b>seats</b>: If a course you need is full and has no waitlist, you can use the ' + linkIt(link.coursicle, 'Coursicle') + ' app to get an alert when a seat opens. Coursicle is not affiliated with or contracted by VCU, so use this tool at your own risk.',
    null
);

// Former Actions, now Events
var changeMajor = new Button(
    'event', 
    '🔄', 
    'Major/Conc. Change',
    null, 
    1, 
    0,
    'We discussed the possibility of a ' + linkIt(link.changeMajor, 'change of major/concentration') + '. Some programs have ' + linkIt(link.changeMajorRequirements, 'requirements') + ' to change into. <input type="text">', 
    'Complete the ' + linkIt(link.changeMajor, 'major/concentration change form') + ' if desired.', 
    null, 
    null
);

var changeMinor = new Button(
    'event', 
    '🔀', 
    'Minor Change', 
    null, 
    1, 
    0, 
    'We discussed the possibility of a ' + linkIt(link.changeMinor, 'change of minor') + '. <input type="text">', 
    'Complete the ' + linkIt(link.changeMinor, 'minor change form') + ' if desired.', 
    null, 
    null
);

var fiOverride = new Button(
    'event', 
    '🔎', 
    'FI Override', 
    null, 
    1, 
    0,
	null,
    'Complete the Focused Inquiry override form linked on ' + linkIt(link.fiOverride, 'this page') + ' for UNIV <input type="text">, then register once approved.', 
    null, 
    null
);

var override = new Button(
    'event', 
    '🔧', 
    'Override', 
    null, 
    0, 
    0, 
    'You need an override for <input type="text">. You can find information and forms for overrides by program on ' + linkIt(link.override, 'this page') + '.', 
    'Complete an ' + linkIt(link.overrides, 'override form') + ' for <input type="text">, then register once approved.', 
    null, 
    null
);

var enrollmentCancellation = new Button(
    'event', 
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
    'event', 
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
    'event', 
    '☀️', 
    'Non-FS Terms', 
    null, 
    1, 
    0, 
    'VCU classes can be taken during non-standard ' + linkIt(link.terms, 'terms') + ' such as ' + linkIt(link.summer, 'summer') + ', ' + linkIt(link.intersession, 'winter intersession') + ', ' + linkIt(link.jTerm, 'J-term') + ', and ' + linkIt(link.miniterm, 'miniterm') + ' sessions. This might be an option for you for <input type="text">. Please note that taking Summer classes may cost more than increasing Fall/Spring courseloads. If your Intersession course would cause an overload for your Spring registration, email ' + linkIt('mailto:rar@vcu.edu', 'rar@vcu.edu') + ' to request that they manually register you.', 
    'Explore non-Fall/Spring semester options.',
    null, 
    null
);

var holdImmunization = new Button(
    'event', 
    '💉', 
    'Hold: Immunization', 
    null, 
    1, 
    0,
	null, 
    'Complete tasks required to remove the ' + linkIt(link.immunization, 'imminuzation hold') + ' on your account.',
    null, 
    null
);

// Resources
var majorMaps = new Button(
    'resource', 
    '🗺️', 
    'Major Maps', 
    null, 
    1, 
    0, 
    'VCU publishes ' + linkIt(link.majorMaps, 'Major Maps') + ' that include information about program, requirements, and professional outcomes. If you are considering another major, you can use these as a tool to inform your decision to change.', 
    'Explore the ' + linkIt(link.majorMaps, 'Major Map') + '(s) for <input type="text">.', 
    null, 
    null
);

var financialAid = new Button(
    'resource', 
    '💰', 
    'Financial Services', 
    null, 
    1, 
    0, 
    'I recommended that you discuss your need with ' + linkIt(link.financialAid, 'Student Financial Services') + '.', 
    'Contact ' + linkIt(link.financialAidContact, 'Student Financial Services') + ' about <input type="text">.', 
    null, 
    null
);

var writing = new Button(
    'resource', 
    '✍', 
    'Writing Center', 
    null, 
    1, 
    0, 
    'I recommended that you seek support from the ' + linkIt(link.writing, 'Writing Center') + '.', 
    'Contact the ' + linkIt(link.writing, 'Writing Center') + ' for help with writing.', 
    null, 
    null
);

var mathHelp = new Button(
    'resource', 
    '➗', 
    'Math Help Center', 
    null, 
    1, 
    0, 
    'I recommended that you seek support from the ' + linkIt(link.mathHelpCenter, 'Math Help Center') + '.', 
    'Visit the ' + linkIt(link.mathHelpCenter, 'Math Help Center') + ' for help with math.', 
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
    'Mental Health', 
    null, 
    1, 
    0, 
    'I recommended that you seek support from ' + linkIt(link.counseling, 'University Counseling Services') + ' (UCS). You also have access to ' + linkIt(link.timelyCare, 'TimelyCare') + ' regardless of your insurance status and at no charge. TimelyCare is a virtual health and well-being platform offering 24/7 crisis support and scheduled counseling visits.', 
    'Contact ' + linkIt(link.counseling, 'University Counseling Services') + ' and/or use ' + linkIt(link.timelyCare, 'TimelyCare') + ' to get help with <input type="text">.', 
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

// Former Policies, now Events
var withdraw = new Button(
    'event', 
    '↩️', 
    'Withdraw', 
    null, 
    1,
    0, 
    'We discussed the ' + linkIt(link.addDropWithdraw, 'Withdraw policy') + '. There are many implications of withdrawal, and you should check with various people/offices before withdrawing. Registration requirements exist for ' + linkIt(link.dropWithdrawSFS, 'financial aid') + ', ' + linkIt(link.housing, 'housing') + ', and ' + linkIt(link.military, 'military support') + '. Violating these requirements may result in owing VCU money or having housing revoked immediately (failing courses can have adverse financial effects, too). Withdrawals count as unsuccessfully attempted courses for the purposes of ' + linkIt(link.sap, 'SAP') + '. They also increase your workload for future semesters (compared to successful completion). Withdrawal happens via the registration system in ' + linkIt(link.eServices, 'eServices') + '). If you need to withdraw and have a hold on your account, ' + linkIt('mailto:rar@vcu.ed', 'email the registrar') + ' (rar@vcu.ed) and provide your situation, name, V number, course code, and CRN.', 
    'Discuss the implications of withdrawal with all relevant people/offices. ' + linkIt(link.withdrawHowTo, 'Withdraw') + ' from <input type="text"> if desired.',
    null, 
    null
);

var passFail = new Button(
    'event', 
    '‼️', 
    'Pass/Fail', 
    null, 
    1, 
    0, 
    'We discussed the ' + linkIt(link.passFail, 'Pass/Fail grade option') + '. To be eligible, a course must not be required as a (a) course in your major/minor/certificate area, or (b) prerequisite for which you must earn a B. The Pass/Fail option can only be applied to <b>15 credit hours</b>. It <b>cannot</b> be used for courses taken as <b>Historical Repeats</b>.', 
    'Consider the ' + linkIt(link.passFail, 'Pass/Fail grade option') + ', then complete the '+ linkIt(link.passFailForm, 'change in grade mode form') + ' for <input type="text"> if desired.',
    null, 
    null
);

var historicalRepeat = new Button(
    'event', 
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
    'event', 
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
    'event', 
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
    'event', 
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
    'event', 
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
    'event', 
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
    'event', 
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
    'event', 
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
	'You may need an ' + linkIt(link.engOverride, 'override') + ' to get into one or more of your Engineering classes. If you are taking the class(es) in normal sequence, you are guaranteed a seat. You are not guaranteed that this seat will be in your preferred section. If you are taking the class(es) early, you may not get access.', 
    'Complete the ' + linkIt(link.engOverride, 'override form') + ' for the appropriate Engineering program for <input type="text">, then register once approved.', 
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
    'If you took Chemistry in high school, I recommend you make use of the ' + linkIt(link.chemAleks, 'ALEKS process for Chemistry') + '. Placement results can be either CHEM 100 or CHEM 101. Placements of CHEM 100 can be increased to CHEM 101 via completion of learning modules. Retaining a placement of CHEM 100 means you must complete CHEM 100 with a B or higher before you can take CHEM 101. The pass/fail option cannot be used for this prerequisite requirement.', 
    'Take the ' + linkIt(link.chemAleks, 'CHEM placement test') + '. If needed, complete modules to attain placement in CHEM 101.',  
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
    'Request an '  + linkIt(link.physOverride, 'override') + ' for PHYS <input type="text">, then register once approved.', 
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
    'Request an override for MATH <input type="text"> using the form linked on ' + linkIt(link.mathOverride, 'this page') + ', then register once approved.', 
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
    'Request an override for CHEM/Z <input type="text"> using the form linked on ' + linkIt(link.chemOverride, 'this page') + ', then register once approved.', 
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

var engCareerServices = new Button(
    'engineering',
    '🧑‍💼', 
    'Engineering Career Services', 
    null, 
    1, 
    0, 
    linkIt(link.engCareerServices, 'Engineering Career Services') + ' is a fantastic resource for helping with practical experience, internships, application materials, and more. You can make an appointment with Laura Lemza or Tonia Sharpe to discuss your career-related questions and needs. Appointments are scheduled using ' + linkIt(link.handshake, 'Handshake') + '.',
	'Make an appointment with ' + linkIt(link.engCareerServices, 'Engineering Career Services') + ' using ' + linkIt(link.handshake, 'Handshake') + '.',
    null, 
    null
);

var preProfHealth = new Button(
    'engineering', 
    '‍👩‍⚕️', 
    'Pre-Professional Health', 
    null, 
    1, 
    0, 
    'Requirements, procedures, and other information for Pre-Profesional Health minors are available ' + linkIt(link.preProfHealth, 'here') + ' and ' + linkIt(link.preProfHealthAdvising, 'here') + '. You can find the course requirements for the Pre-Med minor ' + linkIt(link.preMed, 'here') + '. Questions not addressed on those pages can be submitted ' + linkIt(link.preProfHealthInquiry, 'here') + '. I can also connect you with a pre-health advisor for a pre-advising information session if you\'re ready to declare the minor.',
	null,
    null,
    null
);

var vip = new Button(
    'engineering', 
    '‍‍🔬', 
    'VIP/Research', 
    null, 
    1, 
    0, 
    'Research opportunities are available in the form of ' + linkIt(link.vip, 'Vertically Integrated Projects') + ' (VIPs), ' + linkIt(link.research, 'other structured opportunities at VCU') + ', ' + linkIt(link.researchNational, 'structured opportunities outside VCU') + ' (especially over the summer), or through other arrangements with professors (e.g., lab work). For VCU opportunities, you generally initiate involvement by contacting the professor leading the project and asking if there is a spot open for you. Read the group\'s research, ask questions, and send an insightful email that shows genuine interest and excitement about the topic. Research opportunities may involve stipends, academic credit, housing, and/or travel funds.',
	null,
    null,
    null
);

var engStudentOrgs = new Button(
    'engineering', 
    '‍‍👥', 
    'Student Orgs', 
    null, 
    1, 
    0, 
    'There are many ' + linkIt(link.engStudentOrgs, 'engineering student organizations') + ' on campus in which you may enjoy and benefit from paricipation. Participation in and leadership of student organizations are great additions to your résumé.',
	null,
    null,
    null
);