def reverse_value(value):
    words = value.split(" ")
    result = []
    for word in words:
        result.append(word[::-1])

    return " ".join(result)


print(reverse_value("we like coding"))
