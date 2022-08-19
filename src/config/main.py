import requests

apiEndpoint_posts = requests.get("https://jwjr726v.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%20%20%20'id'%3A%20id%2C%0A%20%20%20'type'%3A%20categories%5B0%5D-%3Etitle%2C%0A%20%20%20'img'%3A%20mainImage.asset%20-%3Eurl%2C%0A%20%20%20'author_id'%3A%20author-%3Eid%2C%0A%20%20%20'title'%3Atitle%2C%0A%20%20%20'time'%3A%20publishedAt%2C%0A%20%20%20'overview'%3Aoverview%2C%0A%20%7D")

apiEndpoint_members = requests.get("https://jwjr726v.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22author%22%5D%7B%0A%20%20%20'id'%3Aid%2C%0A%20%20%20'name'%3A%20name%2C%0A%20%20%20'profile_pic'%3A%20image.asset-%3Eurl%2C%0A%20%20%20'rule_id'%3A%20role_id%2C%0A%7D")

apiEndpoint_roles = requests.get("https://jwjr726v.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22role%22%5D%7B%0A%20%20%20'id'%3A%20id%2C%0A%20%20%20'name'%3A%20name%0A%20%7D%0A")

apiEndpoint_teams = requests.get("https://jwjr726v.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22team%22%5D%7B%0A%20%20%20'id'%3A%20id%2C%0A%20%20%20'name'%3A%20name%0A%7D%0A")

apiEndpoint_mentors = requests.get("https://jwjr726v.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22mentor%22%5D%7B%0A%20%20%20'id'%3A%20id%2C%0A%20%20%20'name'%3A%20name%2C%0A%20%20%20'profile_pic'%3A%20mainImage.asset-%3Eurl%0A%7D")

    
def export_const(api, slice_start, slice_end):
    content = api.text
    del_content = content[slice_start:slice_end]
    print(del_content)
    
    main_content = content[slice_end:-1]
    print(main_content)
    return main_content

def write_to_js(const, content):
    export_con = 'export const ' + const + '= ' + content + '\n\n\n'
    with open('getAPI.jsx','a',encoding="utf-8") as fd:
        fd.write(export_con)
        print("ADD TO JS IS DONE")

main_content_to_export = export_const(apiEndpoint_posts,0,249)
write_to_js('posts ', main_content_to_export)
   
main_content_to_export = export_const(apiEndpoint_members,0,152)
write_to_js('member ', main_content_to_export)
       
main_content_to_export = export_const(apiEndpoint_roles,0,87)
write_to_js('role ', main_content_to_export)

main_content_to_export = export_const(apiEndpoint_teams,0,86)
write_to_js('team ', main_content_to_export)

main_content_to_export = export_const(apiEndpoint_mentors,0,132)
write_to_js('mentor ', main_content_to_export)

with open('getAPI.jsx','r',encoding="utf-8") as fd:
    # print(type(fd.read()))
    str = fd.read()
    str = str.replace(".000Z", "")
    with open('getAPI.jsx','w',encoding="utf-8") as fd:
        fd.write(str)
        print("FIX TIME DONE!!")