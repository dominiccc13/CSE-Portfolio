import firebase_admin
from firebase_admin import credentials, firestore
import tkinter as tk

# Connect Python to Firebase project by linking to downloaded private key
cred = credentials.Certificate(r"C:\Users\domin\Desktop\customerrelationshipmana-b3a16-firebase-adminsdk-laje5-60b9c44092.json")

firebase_admin.initialize_app(cred)

# Create a client to interact with database
db = firestore.client()

collections = []
customers_gen = db.collection('customers').stream()
customers = []
products_gen = db.collection('products').stream()
products = []
reviews_gen = db.collection('reviews').stream()
reviews = []

for c in customers_gen:
    customers.append((c.id, c.to_dict()))
for p in products_gen:
    products.append((p.id, p.to_dict()))
for r in reviews_gen:
    reviews.append((r.id, r.to_dict()))

selection = input('\nThere are 3 collections in the database: 1 customers, 2 products, and 3 reviews. \nWhich would you like to edit/view? (1,2,3) ')

if selection == '1':
    print()
    for i, tuple in enumerate(customers):
        print(f'{i+1}. {tuple[0]}')
    customer = input(f'\nWhich customer would you like to edit/view? (1,2,3) ')
    print()
    print(customers[int(customer)-1][0], '\n', customers[int(customer)-1][1])
    field = input('\nWhich field would you like to edit? ')
    # type1 = type(customers[int(customer)-1][1][field])
    new_value = input((f'\n{field} is currently {customers[int(customer)-1][1][field]}. Enter a new value (or type \'delete\'): '))
    if new_value == 'delete':
        document = db.collection('customers').document(customers[int(customer)-1][0])
        document.update({'"' + field + '"': firestore.DELETE_FIELD})
        del customers[int(customer)-1][1][field]
    else:
        customers[int(customer)-1][1][field] = new_value
    add_field = input('\nWould you like to add a field? (type \'True\' if yes) ')
    if bool(add_field):
        key = input('Enter field name: ')
        value = input('Enter field value: ')
        customers[int(customer)-1][1][key] = value
    print('\nthe database should reflect the following change: ')
    print(customers[int(customer)-1][0], '\n', customers[int(customer)-1][1])
    db.collection('customers').document(customers[int(customer)-1][0]).set(customers[int(customer)-1][1])
    print()
elif selection == '2':
    print()
    for i, tuple in enumerate(products):
        print(f'{i+1}. {tuple[0]}')
    product = input(f'\nWhich product would you like to edit/view? (1,2,3,4) ')
    print()
    print(products[int(product)-1][0], '\n', products[int(product)-1][1])
    field = input('\nWhich field would you like to edit? ')
    # type1 = type(products[int(product)-1][1][field])
    new_value = input((f'\n{field} is currently {products[int(product)-1][1][field]}. Enter a new value (or type \'delete\'): '))
    if new_value == 'delete':
        document = db.collection('products').document(products[int(product)-1][0])
        document.update({'"' + field + '"': firestore.DELETE_FIELD})
        del products[int(product)-1][1][field]
    else:
        products[int(product)-1][1][field] = new_value
    add_field = input('\nWould you like to add a field? (type \'True\' if yes) ')
    if bool(add_field):
        key = input('Enter field name: ')
        value = input('Enter field value: ')
        products[int(product)-1][1][key] = value
    print('\nthe database should reflect the following change: ')
    print(products[int(product)-1][0], '\n', products[int(product)-1][1])
    db.collection('products').document(products[int(product)-1][0]).set(products[int(product)-1][1])
    print()
else:
    print()
    for i, tuple in enumerate(reviews):
        print(f'{i+1}. {tuple[0]}')
    review = input(f'\nWhich review would you like to edit/view? (1,2) ')
    print()
    print(reviews[int(review)-1][0], '\n', reviews[int(review)-1][1])
    field = input('\nWhich field would you like to edit? ')
    # type1 = type(reviews[int(review)-1][1][field])
    new_value = input((f'\n{field} is currently {reviews[int(review)-1][1][field]}. Enter a new value (or type \'delete\'): '))
    if new_value == 'delete':
        document = db.collection('reviews').document(reviews[int(review)-1][0])
        document.update({'"' + field + '"': firestore.DELETE_FIELD})
        del reviews[int(review)-1][1][field]
    else:
        reviews[int(review)-1][1][field] = new_value
    add_field = input('\nWould you like to add a field? (type \'True\' if yes) ')
    if bool(add_field):
        key = input('Enter field name: ')
        value = input('Enter field value: ')
        reviews[int(review)-1][1][key] = value
    print('\nthe database should reflect the following change: ')
    print(reviews[int(review)-1][0], '\n', reviews[int(review)-1][1])
    db.collection('reviews').document(reviews[int(review)-1][0]).set(reviews[int(review)-1][1])
    print()