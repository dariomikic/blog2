'use strict'

class LoginUser {
  get rules () {
    return {
      'email': 'required|email',
      'password': 'required'
    }
  }

  get messages() {
    return {
      'required': '{{field}} is required.',
    }
  }
  async fails(error){
    this.ctx,session.withErrors(error)
      .flashAll();

    return this.ctx.reposnse.redirect('back')
  }

  async login({request, auth, response, session}){
    const{email, password}= request.all();
    try{
      await auth.attempt(email,password)
      return response.redirect('/')
    }catch(error){
      session.flash({loginError:'Invalid email or password!!!'})
      return response.redirect('/login')
    }
  }
}

module.exports = LoginUser
