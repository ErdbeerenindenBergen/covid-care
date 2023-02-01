<template>
    <div>
        <br>
        <br>
    
      <div class="details-container">

        <div class="namedesc">
            <h4 id="date">{{journal.journalDate}}</h4>
            <h3>Covid test result: {{journal.testedPositive}}</h3>
            <h3>Symptoms: </h3>
            <p v-for="symptom in symptomList" :key="symptom">{{symptom}}</p>
            <br>
            <h3>Notes:</h3>
            <p>{{journal.notes}}</p>
        </div>
  
        <div id="buttons">
          <button class="journal-button" id="edit" v-on:click.prevent="editJournal(journal)"><font-awesome-icon class="fa-icon" id="edit-icon" icon="fa-solid fa-pencil"/> Edit </button>
          <button class="journal-button" id="delete" v-on:click.prevent="deleteJournal(journal)"><font-awesome-icon class="fa-icon"  id="delete-icon" icon="fa-solid fa-trash-can"/> Delete </button>
        </div>
  
      </div>
    </div>
</template>

<script>
import RequestService from '../services/RequestService.js'
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

#buttons {
    display: flex;
    margin: auto;
}

button {
    display: flex;
    justify-content: center;
}

.fa-icon {
    padding-right:10px;
}

.journal-button {
    font-family: 'Times New Roman', Times, serif;
    font-size:30px;
    border: none;
    box-shadow: none;
    color: white;
    padding: 15px;
    border-radius: 10px;
    width: 150px;
}

#edit {
    background-color: rgb(42, 163, 105);
    margin-right: 10px;
}

#edit:hover {
    background-color: rgb(102, 197, 151);
    margin-right: 10px;
}

#delete {
    background-color: rgb(207, 0, 0);
    margin-left: 10px;
}

#delete:hover {
    background-color: rgb(239, 99, 99);
}
</style>