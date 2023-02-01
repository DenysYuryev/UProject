"use strict";

// �������� �� debuger
/*
� ��� ���� ������ � ������� � ���������. ���������� ����������� ������ ��������� �������, ������� �������� ����������� � �� �� ����� ������ ������. 
����� ��������� ������� ���, ����� ��� ������ ������ ���������� ���������.

1) ������� isOpen �� ����� ��������� ��������. ��� �� ��� �� ��������� ����������� � �� - ��������� ��� ����� ������������. ���������� ����� ������� � ���������.
2) ������� isAverageLunchPriceTrue ������ ����� ���� ���� ����� ���� �� ����, ���������� �� � ���������� � ������� ����� (averageLunchPrice).

������ ������� ��������, �� ��������� ������ ������������ ���������. ���� �� ��������������� ���� ����� ���� ����� ��� ������ ����� ������ 20. ���������� ����� ������� � ���������.

3) ������� transferWaitors ������� ��� ����, ����� ���������� ������ ������ � ���������� �� � ������ ��������. �������, � ������ ��������� ����� ������ �����, ������ ��������� � ��. ������ ��� ������� ������ � ������ ���������� � ������ ������ ������ ��� ����������.

�� � �������� ���� �� ����������, ��� ����� � ������� �� ������ ����� ������ �������� ����� ����������, �� � �������� ������! � restorantData ��������� Alice �������� � ���������� Mike! ���������� ����� ������� � ���������� ���������, ����� ������ ���� ���������.
*/
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = '³������' : answer = '�������'; // ������� ������: �������/³������

    return answer; // �� ���������: anwser
}

console.log(isOpen(restorantData.openNow)); // �� ���������: console.log(isOpen(openNow))

// 
function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {  // �� ������� ���� $ � ���:  (+fDish.price.slice(0, -1) + (sDish.price) < average)
        return '���� ���� �������';
    } else {
        return '���� ���� �������';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

//
function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // copy.waitors[0] = {name: 'Mike', age: 32};
    
    // ��� ������ ����� ������ ���� ������ ������,
    // � �� ����� �������� ������ ������� �� �����������
    // ��� ��� ��� ������� ������� �������, �� �������� 
    // ����� �������� ������ � �����

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

const newRestorantData = transferWaitors(restorantData);

console.log(restorantData);
console.log(newRestorantData);

////////////////////////////////////////////////////////////////////////////////////////////////////////


