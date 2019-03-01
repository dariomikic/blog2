'use strict'

class CreatePost {
  get rules () {
    return {
     title:'requierd',
      body:'requierd'
    }
  }

  get messages() {
    return {
      'requierd': '{{field}} is empty'
    }
  }
  async fails(error){
    this.ctx,session.withErrors(error)
      .flashAll();

    return this.ctx.reposnse.redirect('back')
  }
}

module.exports = CreatePost
