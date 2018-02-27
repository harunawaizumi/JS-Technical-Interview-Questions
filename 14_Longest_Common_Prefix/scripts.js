/**
 * Created by haruna on 2/26/18.
 */


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    else if (strs.length === 1) return strs[0]
    else if (strs[0].length === 1 && strs[1].length === 1 && strs[1] !== strs[0])

        let common = strs[0]

    for(let i = 1; i < strs.length; i++) {
        let compared = strs[i]

        for(let j = 0; j < compared.length; j++) {


            if (compared.substring(0, j) !== common.substring(0, j)) {

                common = common.substring(0, j - 1)
                console.log(common)
                return common
            }

        }
    }

    return common
};

longestCommonPrefix(['a', 'b'])