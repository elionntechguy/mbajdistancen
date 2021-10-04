from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import json
import os
import requests
import datetime
import time
from tzlocal import get_localzone
from github import Github
from apscheduler.schedulers.blocking import BlockingScheduler

sched = BlockingScheduler()

g = Github(os.environ.get("tokenauth"))
repo = g.get_user().get_repo('mbajdistancen')
contents = repo.get_contents("")

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--no-sandbox")
chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")

today = datetime.datetime.now()
utc2 = today + datetime.timedelta(hours=2)

@sched.scheduled_job('cron', id="job_1", day_of_week='mon-sun', hour=16, timezone="Europe/Belgrade")
def scheduled_job():
    driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), options=chrome_options)
    driver.set_window_size(3840, 2160)
    url = "https://datastudio.google.com/embed/u/0/reporting/2e546d77-8f7b-4c35-8502-38533aa0e9e8/page/MT0qB"
    url1 = "https://msh.rks-gov.net/10.230.0.57+9000/coviddashboard.html"
    driver.get(url)
    delay = 60
    time.sleep(3)
    teKonfirmuara = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '/html/body/app-bootstrap/ng2-bootstrap/bootstrap/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[1]/div[1]/div/lego-report/lego-canvas-container/div/file-drop-zone/span/content-section/div[15]/canvas-component/div/div/div[1]/div/div/kpimetric/div/div[2]'))).text
    teSheruara = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '/html/body/app-bootstrap/ng2-bootstrap/bootstrap/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[1]/div[1]/div/lego-report/lego-canvas-container/div/file-drop-zone/span/content-section/div[21]/canvas-component/div/div/div[1]/div/div/kpimetric/div/div[2]'))).text
    teVdekur = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '/html/body/app-bootstrap/ng2-bootstrap/bootstrap/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[1]/div[1]/div/lego-report/lego-canvas-container/div/file-drop-zone/span/content-section/div[19]/canvas-component/div/div/div[1]/div/div/kpimetric/div/div[2]'))).text
    testimet = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '/html/body/app-bootstrap/ng2-bootstrap/bootstrap/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[1]/div[1]/div/lego-report/lego-canvas-container/div/file-drop-zone/span/content-section/div[35]/canvas-component/div/div/div[1]/div/div/kpimetric/div/div[2]'))).text

    try:
        qytetet = WebDriverWait(driver, delay).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR,
                                                                                          '#body > div > div > div.lego-reporting-view.activity-view.no-licensed.new-resizer > div.page > div > div.mainBlock > div.alignHolder > div.scaleSizeHolder > div > lego-report > lego-canvas-container > div > file-drop-zone > span > content-section > div:nth-child(78) > canvas-component > div > div > div.component > div > gviz-barchart > div > div:nth-child(1) > div > svg > g:nth-child(2) > g:nth-child(2) > g:nth-child(2) > *')))
    except TimeoutException:
        pass

    qytetinr = []
    for qyteti in qytetet:
        ActionChains(driver).move_to_element(qyteti).perform()
        try:
            mouseover = WebDriverWait(driver, delay) \
                .until(EC.visibility_of_element_located((By.CSS_SELECTOR,
                                                         "#body > div > div > div.lego-reporting-view.activity-view.no-licensed.new-resizer.hover > div.page > div > div.mainBlock > div.google-visualization-tooltip.visible > ul > li:nth-child(2) > span:nth-child(2)")))
            qytetinr.append(mouseover.text)
        except Exception:
            break

    time.sleep(3)
    driver.get(url1)
    vaksinat = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH,
                                                                                  '/html/body/div/div/div/div/div/div[1]/div[1]/div/div/div/div[2]/div/h4'))).text
    dozaPareSite = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH,
                                                                                      '/html/body/div/div/div/div/div/div[1]/div[3]/div/div/div/div[2]/div/h4'))).text
    dozaDyteSite = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH,
                                                                                      '/html/body/div/div/div/div/div/div[1]/div[4]/div/div/div/div[2]/div/h4'))).text

    dozaPare = int(dozaDyteSite.replace(',', '')) + int(dozaPareSite.replace(',', ''))



    with open("data/api.json", "r+") as file:
        information = json.load(file)
        information["tePergjithshme"] = {
            'teKonfirmuara': int(teKonfirmuara.replace(',', '')),
            'teSheruara': int(teSheruara.replace(',', '')),
            'teVdekur': int(teVdekur.replace(',', '')),
            'testimet': int(testimet.replace(',', ''))
        }
        file.seek(0)
        information["vaksina"] = {
            'dozaPare': dozaPare,
            'dozaDyte': int(dozaDyteSite.replace(',', '')),
            'vaksinuartotal': int(vaksinat.replace(',', ''))
        }
        information["qytetet"] = [
            {
                "qyteti": "Prishtine",
                "raste": int(qytetinr[0].replace(',', ''))
            },
            {
                "qyteti": "Mitrovice",
                "raste": int(qytetinr[8].replace(',', ''))
            },
            {
                "qyteti": "Peje",
                "raste": int(qytetinr[3].replace(',', ''))
            },
            {
                "qyteti": "Prizren",
                "raste": int(qytetinr[1].replace(',', ''))
            },
            {
                "qyteti": "Ferizaj",
                "raste": int(qytetinr[2].replace(',', ''))
            },
            {
                "qyteti": "Gjilan",
                "raste": int(qytetinr[7].replace(',', ''))
            },
            {
                "qyteti": "Gjakove",
                "raste": int(qytetinr[5].replace(',', ''))
            }
        ]
        information["historiku"].append(
            {
                "data": utc2.strftime('%Y-%m-%d'),
                "teKonfirmuara": int(teKonfirmuara.replace(',', '')),
                "teSheruara": int(teSheruara.replace(',', '')),
                "teVdekur": int(teVdekur.replace(',', '')),
                'testimet': int(testimet.replace(',', '')),
                "vaksinuartotal": int(vaksinat.replace(',', ''))
            }
        )
        json.dump(information, file, indent=4)
        file.truncate()

    with open('data/api.json', 'r') as file:
        content = file.read()

    contents = repo.get_contents('data/api.json')
    repo.update_file(contents.path, "New cases update " + utc2.strftime('%Y-%m-%d'), content, contents.sha, branch="master")
    print('data/api.json UPDATED')

    print('done!')

    driver.quit()

sched.start()