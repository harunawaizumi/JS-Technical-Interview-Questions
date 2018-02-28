var removeDuplicates = function(nums) {
    var i = 0
    for(i = 0; i < nums.length - 1;) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            // もしi個目とi+1個目が同じ場合は、i+1個目の値を取り除く。
        } else {
            i++;
            // もしi個目とi+1個目が異なる場合は、何もせずに次を比較する。
        }
    }
    return nums.length
};

removeDuplicates([])
removeDuplicates([1, 1])
removeDuplicates([1, 2, 3, 3, 4, 4])
