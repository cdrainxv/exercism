def verify(isbn):
    isbn = isbn.replace('-', '')
    if len(isbn) != 10: return False
    if 'X' in isbn and isbn.find('X') != 9: return False
    counter = 10
    result = 0
    if (isbn[-1] != 'X') or (not isbn[-1].isdigit()):
        for char in isbn:
            if char.isdigit() or char == 'X':
                result += (int(char) if char != 'X' else 10) * counter
                counter -= 1

    return (result  % 11) == 0
