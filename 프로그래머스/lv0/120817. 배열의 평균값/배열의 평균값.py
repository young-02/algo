def solution(numbers):
    answer = 0
    sum = 0
    for x in numbers:
        answer +=  x 
    
    answer /= len(numbers)
    return answer