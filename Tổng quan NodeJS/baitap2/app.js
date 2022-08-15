const listStudent = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];

function avgStudentMale() {

    let sumMale = 0;
    let sumFemale = 0;
    let countMale = 0;
    let countFemale = 0;
    listStudent.forEach(listStudent => {
        if (listStudent.gender.startsWith('male')) {
            sumMale += listStudent.point;
            countMale++;
        } else {
            sumFemale += listStudent.point;
            countFemale++;
        }

    })
    console.log('điểm trung bình của học sinh nam :' + sumMale / countMale);
    console.log('điểm trung bình của học sinh nữ :' + sumFemale / countFemale);

}

avgStudentMale()

let totalPoint = listStudent.reduce((a, b) =>
    a + b.point, 0);
console.log("Tổng điểm tất cả học sinh : "+totalPoint)
console.log("Điểm trung bình tất cả học sinh : "+totalPoint/listStudent.length)

















