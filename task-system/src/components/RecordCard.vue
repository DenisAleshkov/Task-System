<template>
<div class="card">
  <div class="banner">
  <div class="menu">
  <h2 class="name">Morgan Sweeney</h2> 
  <div class="title">Ant Collector</div> 
  <div class="actions">
    <div class="follow-info"></div>
      <h2></h2>
        <a href="#"> <span>12</span></a>
        <a href="#"><small>Followers</small> </a>
      <h2></h2>
        <a href="#">
          <span>1000</span> 
          <small>Following</small> 
          </a>
    <div class="follow-btn"><button>Follow</button> </div>
      </div>
  <div class="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.
  </div>
  </div>
</template>
<script>	
	 export default {
	 	props: {
	 		startRecord: {
	 			type: Array
	 		},
       		processRecord: {
       			type: Array
       		},
       		doneRecord: {
       			type: Array
       		},
	 	},

	 }
</script>
<style>
.card{
  max-width: 360px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 1rem 1.5rem rgba(black, 0.5);
}
.banner{
height: 11rem;
display: flex;
align-items: flex-end;
justify-content: center;
box-sizing: border-box;
}
.menu{
width: 100%;
height: 5.5rem;
padding: 1rem;
display: flex;
align-items: flex-start;
justify-content: flex-end;
position: relative;
box-sizing: border-box}
.opener{
width: opener-size;
height: opener-size;
position: relative;
border-radius: 50%;
transition: background-color 100ms ease-in-out;}
.opener:hover{
background-color: #f2f2f2;
}
span{
background-color: font-color;
position: absolute;
top: 0;
left: "calc(50% - %s)" % (dot-size / 2);
border-radius: 50%;
}
span:nth-child(1){
top: 0.45rem;
}
span:nth-child(2){
top: 1.05rem;
}
span:nth-child(3){
top: 1.65rem;
}
h2.name{
text-align: center;
padding: 0 padding-size 0.5rem;
margin: 0;}
.title{
color: lighten(font-color, 50%);
font-size: 0.85rem;
text-align: center;
padding: 0 padding-size 1.2rem;}
.actions {
padding: 0 padding-size 1.2rem;
display: flex;
flex-direction: column;
order: 99;
}
.follow-info{
padding: 0 0 1rem;
display: flex;
}
h2 {
text-align: center;
width: 50%;
margin: 0;
box-sizing: border-box;
}
a{
text-decoration: none;
padding: 0.8rem;
display: flex;
flex-direction: column;
border-radius: 0.8rem;
transition: background-color 100ms ease-in-out;
}
span{
color: #1c9eff;
font-weight: bold;
transform-origin: bottom;
transform: scaleY(1.3);
transition: color 100ms ease-in-out;
}
small{
color: #afafaf;
font-size: 0.85rem;
font-weight: normal;
}
small:hover{
background-color: #f2f2f2;
}
small span{
color: #007ad6;
}
.follow-btn button {
color: inherit;
font: inherit;
font-weight: bold;
background-color: #ffd01a;
width: 100%;
border: none;
padding: 1rem;
outline: none;
box-sizing: border-box;
border-radius: 1.5rem / 50%;
transition: background-color 100ms ease-in-out;
transform: 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
.follow-btn button:hover{
background-color: #efb10a;
transform: scale(1.1);
}
.follow-btn button:active{
background-color: #e8a200;
transform: scale(1);
}
.desc{
text-align: justify;
padding: 0 padding-size 2.5rem;
order: 100;
}

</style>