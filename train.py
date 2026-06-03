# MIT TASK P
# def object_to_array(keys):
#     return list(keys.items())

# print(object_to_array({"a": 10, "b": 20}))
def object_to_array(values):
    result = []
    for key in values:
        result.append([key, values[key]])

    return result


print(object_to_array({"a": 10, "b": 20}))


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

