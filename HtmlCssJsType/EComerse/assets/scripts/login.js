class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();


    }



    validateonSubmit() {
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            self.fields.forEach((field) => {
                const input = document.querySelector('#${field}');
                if(self.validateFields(input) == false) {
                    error++;
                }
                if(error == 0) {
                    console.log("success");
                }
            });
        });
    }

    validateFields(field) {
        if(field.value.trim() == "") {
            this.setStatus(
                field,
                `${field.previousElementSibiling.innerText} cannot be blank`,
                "error"
            );
            return false;
        }

    }
}

const form = document.querySelector(".login-form");
if (form) {
    const fields = ["username", "password", "email"]
    const form = validator = new Login(form, fields);
}