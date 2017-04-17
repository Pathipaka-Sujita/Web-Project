function mainmenu() {
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		});
}
 
 $(document).ready(function(){					
	mainmenu();
});
//***************************************************************************************************
var about = "<br/><b style='color:#0033CC'>- Adjunct Faculty:</b>&nbsp; Dept. of&nbsp; Computer Science, University of Houston.";

//***************************************************************************************************

var coursesList = "";
coursesList += "<br/><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"SOFTWARE DESIGN\" title=\'Syllabus\' />&nbsp;<b style='color:navy'><u><a style=\'text-decoration:none;cursor:pointer;color:#0033CC\' onclick=\'changeContents(5)\' title=\"SOFTWARE DESIGN\">SOFTWARE DESIGN</a></b></u>";
coursesList += "<br/><br/><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"SOFTWARE ENGINEERING\" title=\'Syllabus\' />&nbsp;<b style='color:navy'><u><a style=\'text-decoration:none;cursor:pointer;color:#0033CC\' onclick=\'changeContents(6)\' title=\"SOFTWARE ENGINEERING\">SOFTWARE ENGINEERING</a></b></u>";
//coursesList += "<br/><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Syllabus\" title=\'Syllabus\' />&nbsp;<b style='color:navy'><u><a style=\'text-decoration:none;cursor:pointer;color:#0033CC\' onclick=\'changeContents(7)\' title=\"INTERNET COMPUTING\">INTERNET COMPUTING - Summer 2014</a></b></u>";
//coursesList += "<br/><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"CSCI4234\" title=\'Syllabus\' />&nbsp;<b style='color:navy'><u><a style=\'text-decoration:none;cursor:pointer;color:#0033CC\' onclick=\'changeContents(6)\' title=\"CSCI4234\">CSCI4234: Design of Database Systems</a></b></u>";

//************************************** software_design ******************************************
var software_design ='';// "<br/><b style='color:navy'><u>SOFTWARE DESIGN</b></u>";
software_design +="<br/><b style='color:#CC0000'>Class Room - AH 104, Class Hours: TuTh 5:30P - 7:00P</b>";
software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Checklist\" title=\'Checklist\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/COSC_4353_6353_Checklist.pdf' target=\"_blank\" title=\"Click to view notes\">Checklist</a></b>";
software_design +="<br/><b style='color:#CC0000'><a href='https://groups.google.com/d/forum/sd_uh_spring17' target='_blank'>Join googlegroups for this class</a></b>";
software_design +="<br/><b style='color:#CC0000'><a href='http://vcomm.uh.edu/rajsingh' target='_blank'>Virtual Class Link</a></b>";
software_design +="<br/><br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Syllabus\" title=\'Syllabus\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/syllabus.pdf' target=\"_blank\" title=\"Click to view syllabus\">Syllabus</a></b> -- opens in new window.<b style='color:#CC0000'></b>";

//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Programming Guidelines\" title=\'Programming Guidelines\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='linkpages/ProgrammingGuidelines.html' target=\"_blank\" title=\"Click to view guidelines\">Programming Guidelines</a></b> -- opens in new window.";

software_design +="<br/><br/><b style='color:#0033CC'><u>GRADING POLICY</b></u>";
software_design +="<br/><b style='color:#0033CC'>A</b> 93% - 100% <b style='color:#0033CC'>A-</b> 90-92.9%";
software_design +="<br/><b style='color:#0033CC'>B+</b> 87-89.9% <b style='color:#0033CC'>B</b> 83 - 86.9% <b style='color:#0033CC'>B-</b> 80-82.9%</b>";
software_design +="<br/><b style='color:#0033CC'>C+</b> 77-79.9% <b style='color:#0033CC'>C</b> 73 - 76.9% <b style='color:#0033CC'>C-</b> 70-72.9%</b>";
software_design +="<br/><b style='color:#0033CC'>D+</b> 67-69.9% <b style='color:#0033CC'>D</b> 63 - 66.9% <b style='color:#0033CC'>D-</b> 60-62.9%</b>";
software_design +="<br/><b style='color:#0033CC'>F</b> 0-59.9%";

//software_design +="<br/><br/><b style='color:#0033CC'><u>HOMEWORKS</b></u> -- opens in new window.";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 1\" title=\'Homework 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/hw1.txt' target=\"_blank\" title=\"Click to view homework\">Homework#1 - Posted to SVN</a></b><b style='color:red;'> DUE DATE: 02/08/2016 23:59:59</b>";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 2\" title=\'Homework 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/hw2.txt' target=\"_blank\" title=\"Click to view homework\">Homework#2</a></b><b style='color:red;'> DUE DATE: 03/25/2016 23:59:59</b>";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 3\" title=\'Homework 3\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/hw3.txt' target=\"_blank\" title=\"Click to view homework\">Homework#3</a></b><b style='color:red;'> DUE DATE: 11/04/2013</b>";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 4\" title=\'Homework 4\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/hw4.txt' target=\"_blank\" title=\"Click to view homework\">Homework#4</a></b><b style='color:red;'> DUE DATE: 12/04/2013</b>";

software_design +="<br/><br/><b style='color:#0033CC'><u>ASSIGNMENTS</b></u> -- directly posted to your SVN account.";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 1\" title=\'Assignment 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/assignment1.txt' target=\"_blank\" title=\"Click to view assignment 1\">Assignment#1</a></b><b style='color:red;'> DUE DATE: 02/22/2016 23:59:59</b>";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 2\" title=\'Assignment 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/assignment2.txt' target=\"_blank\" title=\"Click to view assignment 2\">Assignment#2</a></b><b style='color:red;'> DUE DATE: 04/08/2016 23:59:59</b>";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 3\" title=\'Assignment 3\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/assignment3.txt' target=\"_blank\" title=\"Click to view assignment 3\">Assignment#3</a></b><b style='color:red;'> DUE DATE: 04/30/2016 23:59:59</b>";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 4\" title=\'Assignment 4\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/assignment4.pdf' target=\"_blank\" title=\"Click to view assignment 4\">Assignment#4</a></b><b style='color:red;'> DUE DATE: 11/19/2013</b>";

//software_design +="<br/><br/><b style='color:#0033CC'><u>EXAMS</b></u> -- opens in new window.";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Midterm 1\" title=\'Midterm 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/midterm1.txt' target=\"_blank\" title=\"Click to view Midterm 1\">Midterm#1</a></b><b style='color:red;'> DUE DATE: 03/03/2016 23:59:59</b>";
//software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Midterm 2\" title=\'Midterm 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/midterm2.txt' target=\"_blank\" title=\"Click to view Midterm 2\">Midterm#2</a></b><b style='color:red;'> DUE DATE: 04/25/2016 23:59:59</b>";

software_design +="<br/><br/><b style='color:#0033CC'><u>NOTES</b></u> -- opens in new window.";
software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 1\" title=\'Notes Week 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week1.pdf' target=\"_blank\" title=\"Click to view notes\">1-Intro</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 2\" title=\'Notes Week 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week2.pdf' target=\"_blank\" title=\"Click to view notes\">2-Soft-Dev</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes UML\" title=\'Notes UML\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week12.pdf' target=\"_blank\" title=\"Click to view notes\">3-UML</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 3\" title=\'Notes Week 3\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week3.pdf' target=\"_blank\" title=\"Click to view notes\">4-TDD</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 4\" title=\'Notes Week 4\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week4.pdf' target=\"_blank\" title=\"Click to view notes\">5-OOD</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 5\" title=\'Notes Week 5\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week5.pdf' target=\"_blank\" title=\"Click to view notes\">6-Refactoring</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 6\" title=\'Notes Week 6\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week6.pdf' target=\"_blank\" title=\"Click to view notes\">7-DP</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 7\" title=\'Notes Week 7\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week7.pdf' target=\"_blank\" title=\"Click to view notes\">8-Creational</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 8\" title=\'Notes Week 8\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week8.pdf' target=\"_blank\" title=\"Click to view notes\">9-Structural</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 9\" title=\'Notes Week 9\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week9.pdf' target=\"_blank\" title=\"Click to view notes\">10-Behavioral</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 10\" title=\'Notes Week 10\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week10.pdf' target=\"_blank\" title=\"Click to view notes\">11-Architectural</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 11\" title=\'Notes Week 11\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/notes_week11.pdf' target=\"_blank\" title=\"Click to view notes\">12-Quality</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Advanced Topic\" title=\'Advanced Topic\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/advanced_topic.pdf' target=\"_blank\" title=\"Click to view notes\">13-Advanced Topic</a></b>";

software_design +="<br/><br/><b style='color:#0033CC'><u>ADDITIONAL RESOURCES</b></u> -- opens in new window.";
software_design +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"SCRUM\" title=\'SCRUM\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='https://www.scrum.org/' target=\"_blank\" title=\"Click to view\">SCRUM</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"TDD\" title=\'TDD\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/TDD.pdf' target=\"_blank\" title=\"Click to view\">TDD</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"OOP\" title=\'OOP\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='http://www.codeproject.com/Articles/22769/Introduction-to-Object-Oriented-Programming-Concep' target=\"_blank\" title=\"Click to view\">OOP</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"DPs\" title=\'DPs\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='http://www.oodesign.com/' target=\"_blank\" title=\"Click to view\">Design Paterns</a></b>";
//software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"DPs\" title=\'DPs\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='http://sourcemaking.com/behavioral_patterns/' target=\"_blank\" title=\"Click to view\">Behavioral DP</a></b>";
software_design +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"SDD_Template\" title=\'SDD\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_design/SDD-Template.pdf' target=\"_blank\" title=\"Click to view\">SDD Template</a></b>";

software_design +="<br/><br/><b style='color:#0033CC'><u>TEACHING ASSISTANT</b></u>";
software_design +="<br/><b style='color:#0033CC'>Name: </b>Santosh K C<br/><b style='color:#0033CC'>Office: </b>PGH 301<br/><b style='color:#0033CC'>Office Hours: </b>Wed 4:00PM - 5:30PM or by appointment<br/><b style='color:#0033CC'>Email: <a href=\"mailto:skc@uh.edu\" title=\'email TA\' style=\'text-decoration:none;color:#0066ff;\'>skc@uh.edu</a></b><br/>";
software_design +="<br/><b style='color:#0033CC'>Name: </b>Jin Aobo<br/><b style='color:#0033CC'>Office: </b>PGH 350<br/><b style='color:#0033CC'>Office Hours: </b>TuTh 3-4PM or by appointment<br/><b style='color:#0033CC'>Email: <a href=\"mailto:jinaobo1103@gmail.com\" title=\'email TA\' style=\'text-decoration:none;color:#0066ff;\'>jinaobo1103@gmail.com</a></b><br/>";

//************************************** software_engineering ******************************************
var software_engineering ='';// "<br/><b style='color:navy'><u>SOFTWARE ENGINEERING</b></u>";
software_engineering +="<br/><b style='color:#CC0000'>Class Room - SEC 104, Class Hours: MW 5:30P - 7:00P</b>";
software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Checklist\" title=\'Checklist\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/COSC_4351_Checklist.pdf' target=\"_blank\" title=\"Click to view notes\">Checklist</a></b>";
software_engineering +="<br/><b style='color:#CC0000'><a href='https://groups.google.com/d/forum/se_uh_spring17' target='_blank'>Join googlegroups for this class</a></b>";
software_engineering +="<br/><b style='color:#CC0000'><a href='http://vcomm.uh.edu/rajsingh' target='_blank'>Virtual Class Link</a></b>";

software_engineering +="<br/><br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Syllabus\" title=\'Syllabus\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/syllabus.pdf' target=\"_blank\" title=\"Click to view syllabus\">Syllabus</a></b> -- opens in new window.<b style='color:#CC0000'></b>";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Programming Guidelines\" title=\'Programming Guidelines\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='linkpages/ProgrammingGuidelines.html' target=\"_blank\" title=\"Click to view guidelines\">Programming Guidelines</a></b> -- opens in new window.";

software_engineering +="<br/><br/><b style='color:#0033CC'><u>GRADING POLICY</b></u>";
software_engineering +="<br/><b style='color:#0033CC'>A</b> 93% - 100% <b style='color:#0033CC'>A-</b> 90-92.9%";
software_engineering +="<br/><b style='color:#0033CC'>B+</b> 87-89.9% <b style='color:#0033CC'>B</b> 83 - 86.9% <b style='color:#0033CC'>B-</b> 80-82.9%</b>";
software_engineering +="<br/><b style='color:#0033CC'>C+</b> 77-79.9% <b style='color:#0033CC'>C</b> 73 - 76.9% <b style='color:#0033CC'>C-</b> 70-72.9%</b>";
software_engineering +="<br/><b style='color:#0033CC'>D+</b> 67-69.9% <b style='color:#0033CC'>D</b> 63 - 66.9% <b style='color:#0033CC'>D-</b> 60-62.9%</b>";
software_engineering +="<br/><b style='color:#0033CC'>F</b> 0-59.9%";

//software_engineering +="<br/><br/><b style='color:#0033CC'><u>HOMEWORKS</b></u> -- opens in new window.";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 1\" title=\'Homework 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/hw1.txt' target=\"_blank\" title=\"Click to view homework\">Homework#1 - Posted to SVN</a></b><b style='color:red;'> DUE DATE: 02/08/2015 23:59:59</b>";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 2\" title=\'Homework 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/hw2.txt' target=\"_blank\" title=\"Click to view homework\">Homework#2</a></b><b style='color:red;'> DUE DATE: 03/25/2016 23:59:59</b>";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 3\" title=\'Homework 3\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/hw3.txt' target=\"_blank\" title=\"Click to view homework\">Homework#3</a></b><b style='color:red;'> DUE DATE: 11/04/2013</b>";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 4\" title=\'Homework 4\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/hw4.txt' target=\"_blank\" title=\"Click to view homework\">Homework#4</a></b><b style='color:red;'> DUE DATE: 12/04/2013</b>";

software_engineering +="<br/><br/><b style='color:#0033CC'><u>ASSIGNMENTS</b></u> -- directly posted to your SVN account.";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 1\" title=\'Assignment 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/assignment1.txt' target=\"_blank\" title=\"Click to view assignment 1\">Assignment#1</a></b><b style='color:red;'> DUE DATE: 02/22/2016 23:59:59</b>";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 2\" title=\'Assignment 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/assignment2.txt' target=\"_blank\" title=\"Click to view assignment 2\">Assignment#2</a></b><b style='color:red;'> DUE DATE: 04/08/2016 23:59:59</b>";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 3\" title=\'Assignment 3\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/assignment3.txt' target=\"_blank\" title=\"Click to view assignment 3\">Assignment#3</a></b><b style='color:red;'> DUE DATE: 04/30/2016 23:59:59</b>";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 4\" title=\'Assignment 4\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/assignment4.pdf' target=\"_blank\" title=\"Click to view assignment 4\">Assignment#4</a></b><b style='color:red;'> DUE DATE: 11/19/2013</b>";

//software_engineering +="<br/><br/><b style='color:#0033CC'><u>EXAMS</b></u> -- opens in new window.";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Midterm 1\" title=\'Midterm 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/midterm1.txt' target=\"_blank\" title=\"Click to view Midterm 1\">Midterm#1</a></b><b style='color:red;'> DUE DATE: 10/06/2015 23:59:59</b>";
//software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Midterm 2\" title=\'Midterm 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/midterm2.txt' target=\"_blank\" title=\"Click to view Midterm 2\">Midterm#2</a></b><b style='color:red;'> DUE DATE: 11/16/2015 23:59:59</b>";

software_engineering +="<br/><br/><b style='color:#0033CC'><u>NOTES</b></u> -- opens in new window.";
software_engineering +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 1\" title=\'Notes Week 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week1.pdf' target=\"_blank\" title=\"Click to view notes 1\">1-Intro</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 2\" title=\'Notes Week 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week2.pdf' target=\"_blank\" title=\"Click to view notes 2\">2-Software Development Process</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 3\" title=\'Notes Week 3\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week3.pdf' target=\"_blank\" title=\"Click to view notes 3\">3-Feasibility Studies</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 4\" title=\'Notes Week 4\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week4.pdf' target=\"_blank\" title=\"Click to view notes 4\">4-Requirements</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 5\" title=\'Notes Week 5\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week5.pdf' target=\"_blank\" title=\"Click to view notes 5\">5-Project management</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 6\" title=\'Notes Week 6\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week6.pdf' target=\"_blank\" title=\"Click to view notes 6\">6-Requirements Engineering</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 7\" title=\'Notes Week 7\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week7.pdf' target=\"_blank\" title=\"Click to view notes 7\">7-Requirements Analysis</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 8\" title=\'Notes Week 8\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week8.pdf' target=\"_blank\" title=\"Click to view notes 8\">8-Modeling Techniques</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 9\" title=\'Notes Week 9\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week9.pdf' target=\"_blank\" title=\"Click to view notes 9\">9-OOP/OOD</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 10\" title=\'Notes Week 10\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week10.pdf' target=\"_blank\" title=\"Click to view notes 10\">10-Software Design</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 11\" title=\'Notes Week 11\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week11.pdf' target=\"_blank\" title=\"Click to view notes 11\">11-TDD</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes Week 12\" title=\'Notes Week 12\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/notes_week12.pdf' target=\"_blank\" title=\"Click to view notes 12\">12-Testing and Documentation</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Advanced Topic\" title=\'Advanced Topic\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/advanced_topic.pdf' target=\"_blank\" title=\"Click to view notes 12\">13-Advanced Topic</a></b>";

software_engineering +="<br/><br/><b style='color:#0033CC'><u>ADDITIONAL RESOURCES</b></u> -- opens in new window.";
software_engineering +="<br/>&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"OOP\" title=\'OOP\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='http://www.codeproject.com/Articles/22769/Introduction-to-Object-Oriented-Programming-Concep' target=\"_blank\" title=\"Click to view\">OOP</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"cp\" title=\'cp\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/criticalPath.pdf' target=\"_blank\" title=\"Click to view\">Critical Path</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"srs\" title=\'srs\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/SRS_template.pdf' target=\"_blank\" title=\"Click to view\">SRS Template</a></b>";
software_engineering +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"SDD_Template\" title=\'SDD\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/software_engineering/SDD-Template.pdf' target=\"_blank\" title=\"Click to view\">SDD Template</a></b>";

software_engineering +="<br/><br/><b style='color:#0033CC'><u>TEACHING ASSISTANT</b></u>";
//software_engineering +="<br/><b style='color:#0033CC'>Name: </b>Santosh K C<br/><b style='color:#0033CC'>Office: </b>PGH 301<br/><b style='color:#0033CC'>Office Hours: </b>Wed 4:00PM - 5:30PM or by appointment<br/><b style='color:#0033CC'>Email: <a href=\"mailto:skc@uh.edu\" title=\'email TA\' style=\'text-decoration:none;color:#0066ff;\'>skc@uh.edu</a></b><br/>";
software_engineering +="<br/><b style='color:#0033CC'>Name: </b>Amanveer Wesley<br/><b style='color:#0033CC'>Office: </b>TBD<br/><b style='color:#0033CC'>Office Hours: </b>By appointment<br/><b style='color:#0033CC'>Email: <a href=\"mailto:amanveerwesley@gmail.com\" title=\'email TA\' style=\'text-decoration:none;color:#0066ff;\'>amanveerwesley@gmail.com</a></b><br/>";

//************************************** internet_computing ******************************************
var internet_computing ='';
// "<br/><b style='color:navy'><u>SOFTWARE DESIGN</b></u>";
internet_computing +="<br/><b style='color:#CC0000'>Class Room - AH108, Class Hours: M-F 6:00P - 8:00P</b>";
internet_computing +="<br/><b style='color:#CC0000'><a href='https://groups.google.com/d/forum/internet-computing-uh-summer14' target='_blank'>Join googlegroups for this class</a></b>";
internet_computing +="<br/><br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Syllabus\" title=\'Syllabus\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/syllabus.pdf' target=\"_blank\" title=\"Click to view syllabus\">Syllabus</a></b> -- opens in new window.<b style='color:#CC0000'></b>";
//internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Programming Guidelines\" title=\'Programming Guidelines\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='linkpages/ProgrammingGuidelines.html' target=\"_blank\" title=\"Click to view guidelines\">Programming Guidelines</a></b> -- opens in new window.";

internet_computing +="<br/><br/><b style='color:#0033CC'><u>GRADING POLICY</b></u>";
internet_computing +="<br/><b style='color:#0033CC'>A</b> 93% - 100% <b style='color:#0033CC'>A-</b> 90-92.9%";
internet_computing +="<br/><b style='color:#0033CC'>B+</b> 87-89.9% <b style='color:#0033CC'>B</b> 83 - 86.9% <b style='color:#0033CC'>B-</b> 80-82.9%</b>";
internet_computing +="<br/><b style='color:#0033CC'>C+</b> 77-79.9% <b style='color:#0033CC'>C</b> 73 - 76.9% <b style='color:#0033CC'>C-</b> 70-72.9%</b>";
internet_computing +="<br/><b style='color:#0033CC'>D+</b> 67-69.9% <b style='color:#0033CC'>D</b> 63 - 66.9% <b style='color:#0033CC'>D-</b> 60-62.9%</b>";
internet_computing +="<br/><b style='color:#0033CC'>F</b> 0-59.9%";

internet_computing +="<br/><br/><b style='color:#0033CC'><u>HOMEWORKS</b></u> -- opens in new window.";
internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 1\" title=\'Homework 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/hw1.txt' target=\"_blank\" title=\"Click to view homework\">Homework#1</a></b><b style='color:red;'> DUE DATE: 07/15/2014 23:59:59</b>";
internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 2\" title=\'Homework 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/hw2.txt' target=\"_blank\" title=\"Click to view homework\">Homework#2</a></b><b style='color:red;'> DUE DATE: 07/22/2014 23:59:59</b>";
internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 3\" title=\'Homework 3\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/hw3.txt' target=\"_blank\" title=\"Click to view homework\">Homework#3</a></b><b style='color:red;'> DUE DATE: 07/29/2014 23:59:59</b>";
//internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Homework 4\" title=\'Homework 4\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/hw4.txt' target=\"_blank\" title=\"Click to view homework\">Homework#4</a></b><b style='color:red;'> DUE DATE: 12/04/2013</b>";

internet_computing +="<br/><br/><b style='color:#0033CC'><u>ASSIGNMENTS</b></u> -- opens in new window.";
internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 1\" title=\'Assignment 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/assignment1.txt' target=\"_blank\" title=\"Click to view assignment 1\">Assignment#1</a></b><b style='color:red;'> DUE DATE: 07/18/2014 23:59:59</b>";
internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 2\" title=\'Assignment 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/assignment2.txt' target=\"_blank\" title=\"Click to view assignment 2\">Assignment#2</a></b><b style='color:red;'> DUE DATE: 07/25/2014 23:59:59</b>";
internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 3\" title=\'Assignment 3\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/assignment3.txt' target=\"_blank\" title=\"Click to view assignment 3\">Assignment#3</a></b><b style='color:red;'> DUE DATE: 08/01/2014 23:59:59</b>";
//internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Assignment 4\" title=\'Assignment 4\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/assignment4.pdf' target=\"_blank\" title=\"Click to view assignment 4\">Assignment#4</a></b><b style='color:red;'> DUE DATE: 11/19/2013</b>";

internet_computing +="<br/><br/><b style='color:#0033CC'><u>NOTES</b></u> -- opens in new window.";
internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 1\" title=\'Notes 1\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes1.pdf' target=\"_blank\" title=\"Click to view notes 1\">1-Introduction</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 2\" title=\'Notes 2\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes2.pdf' target=\"_blank\" title=\"Click to view notes 2\">2-Browsers</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 3\" title=\'Notes 3\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes3.pdf' target=\"_blank\" title=\"Click to view notes 3\">3-Web2.0</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 4\" title=\'Notes 4\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes4.pdf' target=\"_blank\" title=\"Click to view notes 4\">4-XHTML</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 5\" title=\'Notes 5\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes5.pdf' target=\"_blank\" title=\"Click to view notes 5\">5-CSS</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 6\" title=\'Notes 6\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes6.pdf' target=\"_blank\" title=\"Click to view notes 6\">6-JS1</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 7\" title=\'Notes 7\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes7.pdf' target=\"_blank\" title=\"Click to view notes 7\">7-JS2</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 8\" title=\'Notes 8\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes8.pdf' target=\"_blank\" title=\"Click to view notes 8\">8-jQuery</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 9\" title=\'Notes 9\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes9.pdf' target=\"_blank\" title=\"Click to view notes 9\">9-XML_RSS</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 10\" title=\'Notes 10\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes10.pdf' target=\"_blank\" title=\"Click to view notes 10\">10-AJAX</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 11\" title=\'Notes 11\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes11.pdf' target=\"_blank\" title=\"Click to view notes 11\">11-WebServer</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 12\" title=\'Notes 12\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes12.pdf' target=\"_blank\" title=\"Click to view notes 12\">12-DB</a></b>";

internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 13\" title=\'Notes 13\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes13.pdf' target=\"_blank\" title=\"Click to view notes 13\">13-PHP</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 14\" title=\'Notes 14\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes14.pdf' target=\"_blank\" title=\"Click to view notes 14\">14-RUBY</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 15\" title=\'Notes 15\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes15.pdf' target=\"_blank\" title=\"Click to view notes 15\">15-ASP.NET</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 16\" title=\'Notes 16\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes16.pdf' target=\"_blank\" title=\"Click to view notes 16\">16-JSP/JSF</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"Notes 16\" title=\'Notes 16\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/internet_computing/notes17.pdf' target=\"_blank\" title=\"Click to view notes 17\">17-WebServices</a></b>";
internet_computing +="<br/><br/><b style='color:#0033CC'><u>ADDITIONAL RESOURCES</b></u> -- opens in new window.";
internet_computing +="<br/><b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\'W3C\' title=\'W3C\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='http://www.w3schools.com/' target=\"_blank\" title=\"Click to view\">W3CSchools</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"jQuery\" title=\'jQuery\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='http://jquery.com' target=\"_blank\" title=\"Click to view\">jQuery</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"OOP\" title=\'OOP\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='http://www.codeproject.com/Articles/22769/Introduction-to-Object-Oriented-Programming-Concep' target=\"_blank\" title=\"Click to view\">OOP</a></b>";
internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"onlinecompiler\" title=\'onlinecompiler\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='http://www.compileonline.com/' target=\"_blank\" title=\"Click to view\">onlinecompiler</a></b>";
//internet_computing +="&nbsp;&nbsp;<b style='color:#0033CC'><img src=\"images/right-arrow.gif\" style=\"border:0px solid black;\" alt=\"DPs\" title=\'DPs\' />&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='http://sourcemaking.com/behavioral_patterns/' target=\"_blank\" title=\"Click to view\">Behavioral DP</a></b>";

internet_computing +="<br/><br/><b style='color:#0033CC'><u>TEACHING ASSISTANT</b></u>";
//internet_computing +="<br/><b style='color:#0033CC'>Name: </b>TBD<br/><b style='color:#0033CC'>Office Hours: </b>TBD<br/><b style='color:#0033CC'>Email: <a href=\"mailto:TBD\" title=\'email TA\' style=\'text-decoration:none;color:#0066ff;\'>TBD</a></b>";

//***************************************************************************************************

var publications = "<br/><b style='color:#0033CC'><u>Publications</u><br/>[2013]</b><br/>[1] Singh, R, Clement, K. \"Modeling Hierarchical Data in SQL Databases: Introduction to an Efficient Development framework.\" <i>In Proceedings of SEDE 2013</i>, Los Angles, 2013.&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/publications/SEDE_2013_19.pdf' target=\"_blank\" title=\"Click to view\">PDF</a>";
publications += "<br/><b style='color:#0033CC'><br/>[2011]</b><br/>[1] Singh, R, Yadav, V. \"An Efficient Approach for Discovering Interesting Patterns from Biomedical Data.\" <i>BICoB-2011 Int\'l Conf. on Bioinformatics and Computational Biology</i>, New Orleans, USA, March 2011.&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/publications/bicob_2011_139.pdf' target=\"_blank\" title=\"Click to view\">PDF</a>";
publications += "<br/><br/>[2]Singh, R., Johnsten, T., Raghavan, V.V. and Xie, Y. \"Algorithms for discovering potentially interesting patterns\", <i>Int. J. Granular Computing, Rough Sets and Intelligent Systems,</i> Vol. 2, No. 2, pp.107-122.&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/publications/IJGCRSIS020202_SINGH.pdf' target=\"_blank\" title=\"Click to view\">PDF</a>";
publications += "<br/><b style='color:#0033CC'><br/>[2010]</b><br/>[1] Singh, R, Johnsten, T, Raghavan, V, and Xie, Y. \"Efficient Algorithm for Discovering Potential Interesting Patterns with Closed Itemsets.\" <i>In Proceedings of IEEE Int\'l Conf. on Granular Computing</i>, San Jose, CA, 2010.&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/publications/GrC_2010.pdf' target=\"_blank\" title=\"Click to view\">PDF</a>";
publications += "<br/><b style='color:#0033CC'><br/>[2009]</b><br/>[1] Singh, R, Johnsten, T, Raghavan, V, and Xie, Y. \"An Efficient Algorithm for Discovering Positive and Negative Patterns.\" <i>In Proceedings of IEEE Int\'l Conf. on Granular Computing</i>, Nanchang, China, 2009.&nbsp;<a style=\'text-decoration:none;color:#0033CC\' href='documents/publications/GrC_2009.pdf' target=\"_blank\" title=\"Click to view\">PDF</a>";
publications +="<br/><br/><b style='color:#0033CC'><u>Presentations</u></b>";
publications +="<br/>- \"<i>Web Based Applications in Small Businesses.</i>\" at Louisiana Academy of Sciences. <br/>-  \"<i>Low Power VLSI Designs</i>\" at Louisiana Academy of Sciences.";
publications +="<br/>- \"<i>Granular Computing: Research Issues.<i>\" at Center of Advanced Computer Studies, University of Louisiana at Lafayette.";
publications +="<br/>- \"<i>Mining Potentially Useful Positive and Negative Association Patterns: Beyond Support-Confidence Framework.</i>\" at Center of Advanced Computer Studies, University of Louisiana at Lafayette.";

//***************************************************************************************************

var biodata = "<br/>Dr. Raj Singh completed Ph.D. in Computer Science at the Center for Advanced Computer Studies (CACS),";
biodata += " University of Louisiana at Lafayette. The title of his dissertation is \"<i>Mining Potentially Interesting Positive and Negative Association Patterns: Beyond the Support-Confidence Framework</i>.\" He has a Bachelor of Science in Electronics Engineering from Nagpur University, a Master of Business Administration from Nagpur University, and a Master of Science in Computer Science from McNeese State University.";
biodata +="<br/><br/>His academic experience includes research and teaching at Somaiya Engineering College, University of Mumbai, instructor positions at McNeese State University and the University of Louisiana at Lafayette. He is adjunct faculty at University of Houston, and University of Houston Clear Lake.<br/>";
biodata +="<br/>Professionally, Dr. Singh has over twelve years of software industry experience.";
biodata +="<br/><br/>His research interests are in areas of data mining, biomedical data mining, web data mining, and software development.";

//***************************************************************************************************

var contact = "<br/><b style='color:#0033CC'>- Office</b><br/>";
contact +="Phone xxx.xxx.xxx<br/>Email: <a href=\"mailto:rsingh@cs.uh.edu\" title=\'email Dr. Singh\' style=\'text-decoration:none;color:#0066ff;\'>rsingh@cs.uh.edu</a><br/>";


contact +="<br/><b style='color:#0033CC'>- Office Hours: </b> by appointment.";

//***************************************************************************************************

var title =new Array("&nbsp;&nbsp;About Me","&nbsp;&nbsp;Courses","&nbsp;&nbsp;Publications","&nbsp;&nbsp;Biodata","&nbsp;&nbsp;Contact Information","&nbsp;&nbsp;SOFTWARE DESIGN","&nbsp;&nbsp;SOFTWARE ENGINEERING","&nbsp;&nbsp;INTERNET COMPUTING");

//***************************************************************************************************

var contents =new Array(about,coursesList,publications,biodata,contact,software_design,software_engineering,internet_computing);

//***************************************************************************************************

var images = new Array("uh.png");
function changeContents(n){
				 document.getElementById('navTitle').innerHTML = title[n];
				 document.getElementById('contents').innerHTML = contents[n];
				 document.getElementById('images').src = "images/"+images[0];
}

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});