<template>
  <section class="members flex justify-center align-items-center pos-r">
    <div class="container">
      <h2 >Members</h2>
      <div class="crew-wrap pos-r">
        <div class="grid flex ">
         <div class="member-wrap" v-for="member in members" :key="member.name">
            <a class="member db">
              <p class="pos-a">{{member.name}}</p>
            </a>
         </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default { 
  name: 'section-members',
  data() {
    return {
      members: [
         {name:'O.G.Stress',image:'',},
         {name:'StressTheAlmighty',image:'',},
         {name:'OldManStress',image:'',},
         {name:'Stress',image:'',},
        {name:'O.G.Stress',image:'',},
         {name:'StressTheAlmighty',image:'',},
         {name:'OldManStress',image:'',},
         {name:'Stress',image:'',},
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
  .members {
    background:black;
    color:white;
    min-height:50vh;
    overflow: hidden;
    .container {
      padding:8vh 0;
     
      h2 {
       margin:4vh 0 8vh;
       text-align: center;
      }
      .grid {
 
        
        flex-wrap: wrap;
        .member-wrap{
          min-height: 40vh;
          height: calc(40vh + 4vw);
          position: relative;
          width: 25%;
          .member {
            width: calc(100% - 1.5rem);
            height: calc(100% - 1.5rem);
            position: absolute;
            left: calc(1.5rem / 2);
            border:1px solid #fff;
            background-image: url('https://i.pinimg.com/originals/0e/0b/84/0e0b847e626366a585e95290d5c4ae82.jpg');
            background-size: cover;
            background-position: bottom center;
            overflow: hidden;
            filter: grayscale(1);
            transition: .3s ease;
          
            &:hover {
              filter: grayscale(0);
            }
            p { 
              bottom:0;
              left:0;
              width:100%;
              font-size: calc(3.5vh + 3.5vw);
              font-weight: 900;
              font-family: $font-2;
              letter-spacing: -25px;
              color:rgba(255, 255, 255, 0.3);
              
            }
          }
        }
      }

    }
  }
</style>
