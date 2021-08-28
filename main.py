from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import json
import os
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--no-sandbox")
chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")

driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), options=chrome_options)
driver.get("https://datastudio.google.com/embed/u/0/reporting/2e546d77-8f7b-4c35-8502-38533aa0e9e8/page/MT0qB")
delay = 20
teKonfirmuara = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '/html/body/app-bootstrap/ng2-bootstrap/bootstrap/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[1]/div[1]/div/lego-report/lego-canvas-container/div/file-drop-zone/span/content-section/div[15]/canvas-component/div/div/div[1]/div/div/kpimetric/div/div[2]'))).text
teSheruara = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '/html/body/app-bootstrap/ng2-bootstrap/bootstrap/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[1]/div[1]/div/lego-report/lego-canvas-container/div/file-drop-zone/span/content-section/div[21]/canvas-component/div/div/div[1]/div/div/kpimetric/div/div[2]'))).text
teVdekur = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '/html/body/app-bootstrap/ng2-bootstrap/bootstrap/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[1]/div[1]/div/lego-report/lego-canvas-container/div/file-drop-zone/span/content-section/div[19]/canvas-component/div/div/div[1]/div/div/kpimetric/div/div[2]'))).text
testimet = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '/html/body/app-bootstrap/ng2-bootstrap/bootstrap/div/div/div/div/div/div[1]/div[2]/div/div[1]/div[1]/div[1]/div/lego-report/lego-canvas-container/div/file-drop-zone/span/content-section/div[35]/canvas-component/div/div/div[1]/div/div/kpimetric/div/div[2]'))).text

with open("routes/api.json", "r+") as file:
    information = json.load(file)
    information["tePergjithshme"] = {
        'teKonfirmuara': int(teKonfirmuara.replace(',', '')),
        'teSheruara': int(teSheruara.replace(',', '')),
        'teVdekur': int(teVdekur.replace(',', '')),
        'testimet': int(testimet.replace(',', ''))
    }
    file.seek(0)
    json.dump(information, file, indent=4)
    file.truncate()

with open("routes/api.json", 'w') as file:
    json.dump(information, file, indent=2)

print("Successfully updated!")

driver.quit()