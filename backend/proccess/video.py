def convert_channel_data(channels):
    result = []
    for channel_item in channels:
        channel_result = dict()
        channel_result['videos'] = convert_video_data(channel_item.videos)
        channel_result['id'] = channel_item.id
        channel_result['name'] = channel_item.name
        result.append(channel_result)
    return result

def convert_video_data(videos):
    result = []
    for video_item in videos:
        video_result = get_video_item(video_item)
        result.append(video_result)
    return result

def get_video_item(video):
    result = dict()
    key_list = ['id', 'youtube_id', 'channel_id', 'create_date', 'title', 'description', 'duration']

    # Get video attributes
    for key_item in key_list:
        result[key_item] = getattr(video, key_item)

    # Get measurement after 2 days
    for measurement_item in video.measurements:
        if (measurement_item.measurement_date.date() - video.create_date.date()).days == 2:
            result['measurement_after_2_days'] = get_measurement_item(measurement_item)
    
    return result

def get_measurement_item(measurement):
    result = dict()
    key_list = ['id', 'video_id', 'measurement_date', 'sub_count', 'comments', 'subscribersgained', 'subscriberslost', 'unsub_views', 'unsub_likes', 'unsub_dislikes', 'unsub_shares']
    for key_item in key_list:
        result[key_item] = getattr(measurement, key_item)
    return result