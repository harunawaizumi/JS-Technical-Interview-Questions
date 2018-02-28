var longestCommonPrefix = function(strs) {
    var res = '';
    // iはarrayの最初の文字のアルファベットをひとつずつ選択

    if(strs.length === 0)return '';
    else if(strs.length ===1 )return strs[0];
    // jはstrsの中の何番目に位置する単語かを示す
    for(var i =0;i<strs[0].length;i++){
        for(var j=0;j<strs.length-1;){
            if(strs[j][i] === strs[j+1][i]){
                j++;
                if(j===strs.length-1)res +=strs[j][i];
            }else return res
        }
    }
    return res
};