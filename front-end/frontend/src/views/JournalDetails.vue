<template>
    <div>
        <br>
        <br>
    
      <div class="details-container">

        <div class="namedesc">
            <h4 id="date">November 17, 2022</h4>
            <h3>Covid test result: {{journal.testedPositive}}</h3>
            <h3>Symptoms: </h3>
            <p v-for="symptom in symptomList" :key="symptom">{{symptom}}</p>
            <br>
            <h3>Notes:</h3>
            <p>{{journal.notes}}</p>
        </div>
  
        <div id="buttons">
          <button id="edit" v-on:click.prevent="editJournal(journal)"></button>
          <button id="delete" v-on:click.prevent="deleteJournal(journal)" font-awesome-icon icon=faTrashCan ></button>
        </div>
  
      </div>
    </div>
</template>

<script>
import RequestService from '../services/RequestService.js'
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
export default {
    name: "journal-details",
    data () {
    return{
        journal: null,
        symptomList: []
    }
},
    created() {
    RequestService.getJournalByJournalId(this.$route.params.id)
    .then((response) => {
        console.log(response.data);
        this.journal = response.data;
    });
    RequestService.getAllSymptomsByJournalId(this.$route.params.id)
    .then((response) => {
        console.log(response.data);
        response.data.forEach(element => {
            this.symptomList.push(element.symptomName);
        });
        
    });
},
methods: {
    editJournal(journal){
    console.log("hit");
    this.$router.push('/journal/edit/'+journal.journalId)
    },
    deleteJoural(journal){
    console.log(journal);
    RequestService.deleteJournal(journal)
    .then(() => {
        this.$router.push('/journal-list');
    })
    }
}
}
</script>

<style scoped>
.details-container{
    display: flex;
    gap: 10px 10px;
    /* flex-wrap: wrap; */
    justify-content: center;
    height: 100%;
    margin: auto;
    width: 60%;
    flex-direction: column;
}

.namedesc {
    border: 5px solid rgb(234, 234, 234);
    background-color: rgb(234, 234, 234);
    border-radius: 10px;
    color: rgb(47, 47, 47);
    flex-basis: 70%;
    text-align: left;
    padding: 10px;
    overflow: hidden;
    font-family:'Times New Roman', Times, serif;
}

h4{
    font-size: 30px;
    text-align: center;
    justify-content: center;
}

h3{
    padding-left: 20px;
    font-size: 35px;
}

p {
    font-size: 25px;
    margin-left: 35px;
}

/* .instructions, .ingredient-container{
    flex-basis: 47.5%;
    flex-grow: 0;
    flex-shrink: 0;
    min-height: 55vh;
    overflow-y: auto;
    padding: 10px 10px 10px 10px;
} */

/* This section of CSS defines the EDIT button */
/* #span {
position: relative;
display: inline-flex;
width: 180px;
height: 55px;
margin: 20px;
perspective: 1000px;
float: right;
}
#span a{
font-size: 19px;
letter-spacing: 1px;
transform-style: preserve-3d;
transform: translateZ(-25px);
transition: transform .25s;
font-family: 'Montserrat', sans-serif;

}
#span a:before,
#span a:after{
position: absolute;
content: "EDIT";
height: 55px;
width: 180px;
display: flex;
align-items: center;
justify-content: center;
border: 5px solid black;
box-sizing: border-box;
border-radius: 5px;
}

#span a:before{
color: #fff;
background: #000;
transform: rotateY(0deg) translateZ(25px);
}

#span a:after{
color: #000;
background: #fff;
border: 5px solid white;
transform: rotateX(90deg) translateZ(25px);
}

#span a:hover{
transform: translateZ(-25px) rotateX(-90deg);
} */

/* #delete {
float: right;
background-color: rgb(146, 4, 4);
width: 50px;
height: 50px;
text-align: center;
border-radius: 5px;
margin: 20px;
} */

/* #delete i{
position: relative;
color: white;
font-size: 30px;
margin: 0;
top:20%;
} */
</style>