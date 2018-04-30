def is_pangram(sentence):
    abc = set('abcdefghijklmnopqrstuvwxyz')
    seen = set()

    for char in sentence.lower():
        if not char.isalpha():
            continue
        elif char.isalpha() and char not in seen:
            seen.add(char)
    return abc == seen
