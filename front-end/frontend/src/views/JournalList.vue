<template>
<div>
    <div class="cardWrapper">
        <journal-card v-for="journal in journalList" :key="journal.journalId" :journal="journal" class="journal_card"/>
    </div>
</div>
</template>

<script>
import RequestService from '../services/RequestService.js'
import JournalCard from '../components/JournalCard.vue';
export default  {
    name: "journal-list",
    components: {
        JournalCard
    },
    data () {
        return{
            journalList: [] 
        }
    },
    created() {
        RequestService.getAllJournals()
        .then((response) => {
            console.log(response.data);
            this.journalList = response.data;
        })
    }
}
</script>

<style scoped>
.cardWrapper{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px 40px;
    justify-content:center;
}
.journal_card{
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 25px;
    padding-top: 20px;
    background-color: rgb(226, 226, 226);
    border-radius: 5px;
    width: 20%;
    padding-bottom: 30px;
    text-align: center;
    box-shadow: 5px 5px 5px #a0a0a0;
}
</style>