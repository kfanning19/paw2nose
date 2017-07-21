import Axios from 'axios'

const helpers =()=> {
    signUp(first_name, last_name, email, password1, password2, phone, file){
        if(password1 === password2){
            let newUser = { first_name: first_name, last_name: last_name, email: email, password: password1, phone: phone, file: file }
            axios.post('/newUser', newUser).then((res)=>{
                history.push("/userProfile");
            })
        }else{
            alert("Passwords do not match")
                history.push('/signUp');
        }

    }
    getPet(id){
        axios.get('/api/profile/pet/' + id).then((res) =>{
            return res
        })
    }
    getUser(){
        axios.get('/api/user/profile').then((res)=>{
            return res
        });        
    }
    getWeight(id){
        axios.get('/api/profile/pet/weight/'+ id).then(res =>{
            return res
        })
    }
    getHealth(id){
        axios.get('/api/profile/pet/health/'+ id).then(res =>{
            return res
        })
    }
    getDiet(id){
        axios.get('/api/profile/pet/diet/'+ id).then(res =>{
            return res
        })
    }
    getActivity(id){
        axios.get('/api/profile/pet/activity/'+ id).then(res =>{
            return res
        })
    }
    getIllness(id){
        axios.get('/api/profile/pet/illness/'+ id).then(res =>{
            return res
        })
    }
    getMessages(id){
        axios.get('/api/profile/pet/messages/'+ id).then(res =>{
            return res
        })
    }
    getMedications(id){
        axios.get('/api/profile/pet/medications/'+ id).then(res =>{
            return res
        })
    }
};

// We export the helpers function
export default helpers