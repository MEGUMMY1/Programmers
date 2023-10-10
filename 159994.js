/*
문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, 
cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.
*/

function solution(cards1, cards2, goal) {
    for(let i in goal){
        if (cards1[0] == goal[i]) 
            cards1.shift();
        else if(cards2[0] == goal[i])
            cards2.shift();
        else return "No";
    }
    return "Yes";
}
