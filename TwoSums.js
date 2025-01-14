var twoSums = function(nums, target){
    var map = {};

    for(i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        
        if(map.hasOwnProperty(complement)){
            return [map[complement], i];
        } else {
            map[nums[i]] = i;
        }
    };
    return [];
};