# MIT TASK Y
def find_intersection(a, b):
    return [x for x in a if x in b]

print(find_intersection([1, 2, 3], [3, 2, 0]))



# MIT TASK X
# def count_occurrences(obj, target):
#     count = 0

#     for key, value in obj.items():
#         if key == target:
#             count += 1

#         if isinstance(value, dict):
#             count += count_occurrences(value, target)

#     return count


# MIT TASK
# def chunk_array(arr, size):
#     result = []

#     for i in range(0, len(arr), size):
#         result.append(arr[i:i + size])

#     return result


# print(chunk_array([1, 2, 3, 4, 5], 2))


# MIT TASK V
# def count_char(value):
#     count = {}

#     for char in value:
#         if char in count:
#             count[char]+=1
#         else:
#             count[char] = 1

#     return count
# print(count_char("hello"))


# MIT TASK T
# def merge_sorted_arrays(a, b):
#     return sorted(a + b)

# print(merge_sorted_arrays([0, 3, 4], [4, 6, 2]))


# MIT TASK S
# def missing_number(values):
#     for i in range(len(values) + 1):
#         if i not in values:
#             return i


# print(missing_number([3, 0, 1]))


# MIT TASK R
# def calculate(values):
#     return eval(values)

# print(calculate("3 + 4"))


# def calculate(values):
#     a, b, c = values.split()
#     if b == "+":
#         return int(a) + int(c)


# print(calculate("3 + 4"))


# MIT TASK Q
# def has_property(values, keys):
#     return keys in values


# print(has_property({"age": "BMW", "name": "BMW"}, "name"))

# def has_property(values, keys):
#     for cuurent_key in values:
#         if cuurent_key == keys:
#             return True

#     return False


# print(has_property({"age": "BMW", "name": "BMW"}, "name"))


# MIT TASK P
# def object_to_array(keys):
#     return list(keys.items())

# print(object_to_array({"a": 10, "b": 20}))
# def object_to_array(values):
#     result = []
#     for key in values:
#         result.append([key, values[key]])

#     return result


# print(object_to_array({"a": 10, "b": 20}))


# MIT TASK O
# def calculate(values):
#     total = 0

#     for value in values:
#         if isinstance(value, (int, float)):
#             total += value

#     return total


# print(calculate([10, "10", {"son": 10}, "True", 35]))


# MIT TASK N
# def palindrom_check(value):
#     return value == value[::-1]
# print(palindrom_check("dad"))


# MIT TASK M
# def get_square(values):
#     result = []
#     for value in values:
#         result.append({
#             "number": value,
#             "square": value ** 2
#         })
#     return result


# print(get_square([1, 2, 4]))


# def reverse_value(value):
#     words = value.split(" ")
#     result = []
#     for word in words:
#         result.append(word[::-1])

#     return " ".join(result)


# print(reverse_value("we like coding"))
