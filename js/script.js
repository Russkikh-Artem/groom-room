function ready(f) {
  /in/.test(document.readyState) ? setTimeout('ready(' + f + ')', 8) : f();
}

ready(function() {
  var container = new Vue({
    el: '#container',
    data() {

      return {
        placeholderName: 'Ваше имя',
        placeholderService: 'Запись на',

        valueInputName: '',
        valueInputService: '',

        placeholderEmail: 'email',
        placeholderPassword: 'пароль',

        valueEmail: '',
        valuePassword: '',

        default: 'Запись завершена', 
        services: [{

          url: 'img/pet/Cat.jpg',
          name: 'Cat1',
          condition: 'Запись выполнена',
          service: 'Процедуры'
        },

        { 
          url: 'img/pet/Cat2.jpg',
          name: 'Cat2',
          condition: 'Запись выполнена',
          service: 'Груминг'
        },

        { 
          url: 'img/pet/Cat.jpg',
          name: 'Cat3',
          condition: 'Запись выполнена',
          service: 'Обрезание',
        },

        {
          url: 'img/pet/Cat2.jpg',
          name: 'Cat4',
          condition: 'Запись выполнена',
          service: 'Стрижка'
        },
      ],
      }
    },
    methods: {

      inputService(event){
        this.valueInputService = event.target.value;
      },

      inputName(event){
        this.valueInputName = event.target.value;
      },

      applicationForm(){
        if(this.valueInputName === '' && this.valueInputService === '') {
          return
        };

        this.services.push({
          name: this.valueInputName,
          service: this.valueInputService,
          condition: this.default
        });
        this.valueInputName = '';
        this.valueInputService = '';

      },

      inputEmail(event){
        this.valueEmail = event.target.value;
      },

      inputPassword(event){
        this.valuePassword = event.target.value;
      },

      consoleData(){
        console.log(`email: ${this.valueEmail} password: ${this.valuePassword}`);
        this.valueEmail = '';
        this.valuePassword = '';
      }

    }
  })
});