<template>
  <div id="app">
      <nav>
        <router-link id="home-link" v-bind:to="{ name: 'home-page' }"> Home </router-link>
        <router-link id="journal-list-link" v-bind:to="{ name: 'journal-list' }"> View All Journal Entries </router-link>
        <router-link id="create-journal-link" v-bind:to="{ name: 'journal-entry' }"> Add Journal Entry </router-link>
        <router-link id="find-physician-link" v-bind:to="{ name: 'find-physician' }"> Find a Physician </router-link>
      </nav>

      <h1 id="welcome">
            <div>
              <i src="frontend/src/assets/COVIDCareLogo.png"></i>
            </div>
            <div id ="name">Covid Care</div>
            <span>Track your Covid-19 symptoms</span>
      </h1>

    <router-view />
  </div>
</template>

<style>
#name{
text-align: center;
}

h1 span:after, h1 span:before {
content: " ";
display: block;
height: 5px;
background-color:rgb(241, 123, 155);
/* background-color:rgb(206, 0, 55); */
}

h1 {
text-align:left; font-size:50px; text-transform:uppercase; color:black; letter-spacing:5px;
font-family:"Railway", serif; font-weight:400;
}

h1 span {
margin-top: 5px;
font-size:15px; color:black; word-spacing:1px; font-weight:normal; letter-spacing:3px;
text-transform: uppercase; font-family:"Raleway", sans-serif; font-weight:500;
display: grid;
grid-template-columns: 1fr max-content 1fr;
grid-template-rows: 27px 0;
grid-gap: 20px;
align-items: center;
}

body {
  background-color: rgb(245, 233, 208);
  background-color: white;
} 

a {
  color: black;
  text-decoration: none;
}

a:hover { 
color: rgb(229, 36, 87);
}

#home-link, #journal-list-link, #create-journal-link, #find-physician-link {
  display: flex;
  flex-grow: 4;
  justify-content: center;
}

nav {
  justify-content: space-evenly;
  font-family: Georgia, Arial, Helvetica, sans-serif;
  display: flex;
  font-size: 25px;
  /* background-color: goldenrod; */
  background-color: rgb(231, 231, 231);
  border-radius: 10px;
  color: white;
  padding-bottom: 10px;
  padding-top: 10px;
}

.parent {
  /* background-color: rgb(241, 223, 187); */
background-color: white;
display: flex;
}
</style>
