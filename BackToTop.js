/*
 *Back To Top Button Example
 *
 *Author: mohamed yousef
 *Copyright AGASHE 2017
 */
 
/*
 *Function : Back_To_Top .
 *
 *Determine the current vertical position and 
 *set it to zero (page top) .
 */

function Back_To_Top(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
}