<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="h1 text-center">Contact Us</h2>
      <div class="form-wrap">
        <form id="form" action="" v-on:submit.prevent="validateForm" >
          <div class="row between-xs">
            <div class="col-xs-12 col-md-6">
              <div class="input-wrap pos-r">
                <input type="text" id="fullName" name="fullName" placeholder="Name*" v-model="form.name"  v-validate="{ required:true, max:35, regex: /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/ }" data-vv-delay="500">
                <div class="error pos-a">
                  <div v-show="errors.has('fullName:required')">Name is required</div>
                  <div v-show="errors.has('fullName:max')">Must be less than 35 characters</div>
                  <div v-show="errors.has('fullName:regex')">Name is invalid</div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="input-wrap pos-r">
                
                <input type="text" id="email" name="email" placeholder="Email*" v-model="form.email" v-validate="{ required:true, max:50, regex: /.+@.+\.[^\s]/ }" data-vv-delay="500">
               
                <div class="error pos-a">
                  <div v-show="errors.has('email:required')">Email is required</div>
                  <div v-show="errors.has('email:regex')">Please enter a valid email</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="input-wrap pos-r ">
                
                <textarea type="text" id="message" placeholder="Message"  v-model="form.message"></textarea>
                
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="input-wrap pos-r btn-wrap">
                <button type="submit" class="btn">Send</button>
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    validateForm: function(){
      this.$validator.validateAll().then( function(result){
        if (result) {
          document.getElementById('form').submit()
          return;
        }
          return;
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .contact {
    padding: 8vh 0;
    h2{
      margin: 0 0 8vh;
    }
    .form-wrap {
      padding-top:2rem;
      form {
        max-width:900px;
        margin:0 auto;
        .row {
          margin-bottom:3rem;
          .col-xs-12 {
            padding-left:2rem;
            padding-right:2rem;
          }
          input,textarea {
            border:none;
            border-bottom:1px solid black;
            width:100%;
            font-size:18px;
            &:focus{
              outline: none
            }
          }
          textarea {
            min-height: 50px;
          }
          input {
            padding: 1rem 0;
            &:-webkit-autofill {
              -webkit-box-shadow: 0 0 0 30px white inset;
            }
          }
          ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: black;
            font-weight: 300;
          }
        }
        .error {
          font-size:12px;
          color:red;
          bottom:-20px;
        }
        .btn-wrap{
          text-align: right;
          .btn {
            font-size: 16px;
            color: white;
            background: black;
            padding: 0 40px;
            margin-top: 0;
          }
        }
      }
    }
  }
</style>
