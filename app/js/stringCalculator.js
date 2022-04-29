export class stringCalculator {

    add(str) {

        if (str == "") {

            return 0;
        }
        else {

            let nums = [];
            let addition = 0;

            for (let i = 0; i < str.length; i++) {

                if (!isNaN(Number(str[i]))) {

                    if(str[i-1]=="-"){
                        throw new Error("Negatives not allowed -"+Number(str[i]));
                    } else {
                        nums.push(Number(str[i]));
                    }

                    

                }

            }

            for (let i = 0; i < nums.length; i++) {

                addition += nums[i];

            }

            return addition;

        }

    }

}

