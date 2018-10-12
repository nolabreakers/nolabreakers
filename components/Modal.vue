<template>
  <transition name="modal">
    <div class="modal-mask" >
      <div class="modal-wrapper">
        <div class="modal-container pos-r">
          <div class="modal-content pos-a full-width full-height">
            
            <slot name="modalContent"></slot>
          </div>
          <div class="close-wrap">
            <a @click="$emit('close')" class="close-modal">Close</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" >
  .close-modal{position: relative;z-index: 9999;}
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width:80%;
    max-width:1200px;
    height: 75%;
    background: #fff;
    margin: 0px auto;
    border-radius: 2px;
    transition: all .3s ease;
    line-height:1.4rem;
    @media screen and(max-width:600px){
      height:90%;
      width:90%;
    }
    
  }
  .modal-content{
    left:0;
    top:0;
    overflow-y: auto;
  }
  .close-wrap {
    position: absolute;
    bottom: 0;
    background: white;
    width:100%;
    padding:.5rem 2rem;
    border-top:1px solid #eee;
    text-align:right;
  }
  .close-wrap > a {
      line-height:2rem;
      border:1px solid;
      padding: 0 2rem;
      font-weight:lighter;
      display:inline-block;
      text-shadow: 0.5px 0px 0px #000;
  }
  //transition
  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
