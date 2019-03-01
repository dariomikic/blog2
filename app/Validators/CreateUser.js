'use strict'

class CreateUser {
  get rules () {
    return {
      'username': 'required|unique:users',
      'email': 'required|unique:email',
      'password': 'required'
    }
  }
  get messages(){
    return{
      'required':'{{field}} is required.',
      'unique':'{{field}} already exists!'
    }
  }

  async fails(error){
    this.ctx,session.withErrors(error)
      .flashAll();

    return this.ctx.reposnse.redirect('back')
  }
}

module.exports = CreateUser
