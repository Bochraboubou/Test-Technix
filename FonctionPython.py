def somme_des_nombres_pairs(list):
    somme = 0
    for nombre in list:
        if nombre % 2 == 0:
            somme += nombre
    return somme
