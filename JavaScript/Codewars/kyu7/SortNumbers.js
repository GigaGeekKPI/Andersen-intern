function solution(nums) {
    if (!Array.isArray(nums)) return [];

    return nums.sort((a, b) => a - b);
}