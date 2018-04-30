def is_isogram(string):
    seen = set()
    for char in string.lower():
        if not char.isalpha():
            continue
        if char.isalpha() and not char in seen:
            seen.add(char)
        else:
            return False
    return True
