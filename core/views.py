from django.shortcuts import render
from datetime import datetime
from github import Github,Auth
from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport
from core.models import Contact,Skill
import os


# Create your views here.
token = os.getenv('TOKEN')
snapshot_formats=['Snapshot.png','Cover.gif']
def index(request):
    auth=Auth.Token(token)
    ghub=Github(auth=auth)
    user=ghub.get_user()
    repos=[repo for repo in user.get_repos()]
    projects=[]
    for repo in repos:
      if repo.name == 'Reactify' or repo.name == 'Portfolio.OLD' or repo.name == 'emoji-memory-game':
        snapshot=None
        for filename in snapshot_formats:
          try:
            repo.get_contents(filename,ref='snapshot')
            snapshot=f'https://raw.githubusercontent.com/{user.login}/{repo.name}/refs/heads/snapshot/{filename}'
            break
          except:
            continue          
        project={
        'cover': snapshot,  
        'name': repo.name,
        'language': repo.language,
        'description': repo.description,
        'stargazers_count': repo.stargazers_count,
        'forks_count': repo.forks_count,
        'watchers_count': repo.watchers_count,
        'html_url': repo.html_url,
        'homepage': repo.homepage if repo.homepage else repo.html_url,}
        projects.append(project)
    profile={
        'nickname': user.login,
        'avatar_url': user.avatar_url,
        'profile_url': user.html_url,
        'name': user.name,
        'bio': user.bio,
        'location': user.location,
        'email': user.email,
        'followers': user.followers,
        'following': user.following,
        'public_repos': user.public_repos,
    }
    transport = RequestsHTTPTransport(
    url="https://api.github.com/graphql",
    headers={"Authorization": f"Bearer {token}"},
    use_json=True,
    )
    client = Client(transport=transport, fetch_schema_from_transport=False)

    query = gql("""
query {
  viewer {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            color
          }
        }
      }
    }
  }
}
""")
    result = client.execute(query)
    contributions={
        'calendar': result['viewer']['contributionsCollection']['contributionCalendar'],
        'total': result['viewer']['contributionsCollection']['contributionCalendar']['totalContributions'],
        'weeks': result['viewer']['contributionsCollection']['contributionCalendar']['weeks'],
    }
    for week in contributions['weeks']:
      for day in week['contributionDays']:
        day['date'] = datetime.strptime(day['date'], "%Y-%m-%d").date()
    skills = Skill.objects.all().order_by('id')
    contacts = Contact.objects.all().order_by('id')
    return render(request,'index.html',{'profile':profile,'skills':skills,'projects':projects,'repos':repos,'contributions':contributions,'contacts':contacts})