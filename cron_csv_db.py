# import pandas as pd
# from hotel.models import Hotel

# # bulk insertion method


# def upload():
#     csv_file_path = 'hotel_dataset.csv'
#     df = pd.read_csv(csv_file_path)
#     for index, row in df.iterrows():

#         print("updating")
#         model_instance = Hotel(

#             hotel_name=row['name'],
#             hotel_location=row['host_location'],
#             bed_rooms=row['bedrooms'],
#             latitude=row['latitude'],
#             longitude=row['longitude'])

#         model_instance.save()
#     str = 'done'
#     return str

import pandas as pd
from hotel.models import Hotel

# Code below using bulk_create


def upload():
    df = pd.read_csv("hotel_dataset.csv")
    df = df.loc[0:150]
    df = df.dropna(axis=0, subset=['id'])
    print(df.isnull().sum())

    print(df.head())
    df['name'] = df['name'].str[:50]
    df['host_location'] = df['host_location'].str[:50]

    hotels = [
        Hotel(

            hotel_name=row['name'],
            hotel_location=row['host_location'],
            bed_rooms=row['bedrooms'],
            latitude=row['latitude'],
            longitude=row['longitude'])

        for i, row in df.iterrows()
        if not Hotel.objects.filter(hotel_name=row['name']).exists()
    ]
    Hotel.objects.bulk_create(hotels, ignore_conflicts=True)
    msg = "successful"
    print(msg)
    return msg
