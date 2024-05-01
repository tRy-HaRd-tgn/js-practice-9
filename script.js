let student = {
    fName: '',
    sName: '',
    tName: '',
    dateOfBirth: new Date(),
    yearOfEducation:'', // достаточно одной цифры
    facultet: ''
}
let mas =[]; // massive with objects
document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('.container_form');

    form.addEventListener('submit', function(event)   // добавляем на форму ивент сабмит
    {
        event.preventDefault();     // предотвращаем перезагрузку
        let mark = document.querySelector('#table');

        student.fName = form.querySelector('[name="Fname"]').value; //имя
        student.sName = form.querySelector('[name="Sname"]').value; //фамилия
        student.tName = form.querySelector('[name="Tname"]').value; //отчество
        student.dateOfBirth = new Date( form.querySelector('[name="Date_of_birth"]').value);   // год рождения в нормальную дату без часового пояса
        student.yearOfEducation = form.querySelector('[name="Year_of_start_education"]').value; // год начала обучения
        student.facultet = form.querySelector('[name="faculty"]').value;    // факультет
            
        if(parseInt(student.yearOfEducation) <= 2000 || parseInt(student.yearOfEducation) > 2025)
        {
            alert('год начала обучения должен быть больше 2000 и меньше 2025');
            return;
        }
        let year = student.dateOfBirth.getFullYear();
        if(year < 1900)
        {
            alert('год рождения не меньше 1900');
            return;
        }
        student.dateOfBirth=student.dateOfBirth.toLocaleDateString();

        mas.push(student);  // закинули студента в массив
        console.log(student.fName); //имя   
        console.log(student.sName); //фамилия
        console.log(student.tName); //отчество
        console.log(student.dateOfBirth ) // год рождения
        console.log(student.yearOfEducation ) // год начала обучения
        console.log(student.facultet ) // факультет

        let tableLi =  document.createElement('tr');
        let temp = document.createElement('th');
        temp.scope = 'row'; temp.textContent = mas.length;
        tableLi.append(temp);

        temp = document.createElement('td');
        temp.textContent = student.fName;
        tableLi.append(temp);
        
        temp = document.createElement('td');
        temp.textContent = student.sName;
        tableLi.append(temp);

        temp = document.createElement('td');
        temp.textContent = student.tName;
        tableLi.append(temp);

        temp = document.createElement('td');
        temp.textContent = student.dateOfBirth;
        tableLi.append(temp);

        temp = document.createElement('td');
        temp.textContent = student.yearOfEducation;
        tableLi.append(temp);

        temp = document.createElement('td');
        temp.textContent = student.facultet;
        tableLi.append(temp);

        mark.append(tableLi);
    })
})