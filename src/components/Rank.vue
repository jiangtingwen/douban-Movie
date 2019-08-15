<template>
        <div class="container">
            <ScrollView>
                <div class="card rank-card" v-for="item in movie" :key="item._id"
                 @click="goMovie">
                    <p class="text rank-1">{{num}}</p>
                    <div class="image">
                        <img v-lazy="item.poster" width="100%" height="100%">
                    </div>
                    <div class="descript">
                        <h1 class="title">{{item.title}}</h1>
                        <p class="rate">
                            观众评:
                            <span class="text">{{item.rate}}</span>
                        </p>
                        <p class="cast">
                            主演:{{casts}}
                        </p>
                        <p class="duration">
                            时长:{{item.duration}}
                        </p>
                    </div>
                </div>
            </ScrollView>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Rank',
    data () {
        return {
            movie:[]
        }
    },
    computed:{
      casts() {
                
            },
      num () {
               
      }

        },
        
         
        

    
    created () {
        this.getMovie()
    },
    methods: {
        getMovie () {
            axios.get(`/api/api/movie/get_rank`).then(res => {
                console.log(res)
                
                if(res.data.code === 1001) {
                    this.movie = res.data.result.movies
                    console.log(this.movie.length)
                }
            })
        },
        goMovie(){

        }
    },
    
    
}
</script>
<style lang="stylus" scoped>
.card.rank-card
    padding-left 0
.card
    display flex
    padding 10px 20px
    height 140px
    align-items center
    box-sizing border-box
    .text.rank-1
        background-color #ef4238
        color #ffffff
    .text
        width 30px
        height 30px
        margin 0 10px
        line-height 30px
        text-align center
        font-weight 700
    .image
        width 80px
        height 120px
    .descript
        flex 1
        margin-left 10px
        display flex
        flex-direction column
        box-sizing border-box
        line-height 30px
        font-size 13px
        border-bottom 1px solid #e6e6e6
        overflow hidden
        white-space nowrap
        .title
            flex 1
            color #333
            font-size 17px
            font-weight 700
            overflow hidden
            text-overflow ellipsis
        .rate
            flex 1
            .text
                font-size 15px
                font-weight 700
                color #faaf00
        .cast
            flex 1
            overflow hidden
            text-overflow ellipsis
        .duration 
            flex 1



        


</style>